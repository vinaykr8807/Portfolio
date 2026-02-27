from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import uvicorn
import os
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

load_dotenv()

app = FastAPI()

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Firebase Admin for Firestore
try:
    key_path = "firebase-key.json"
    if os.path.exists(key_path):
        import json
        with open(key_path) as f:
            key_data = json.load(f)
        if "\\n" in key_data["private_key"]:
            key_data["private_key"] = key_data["private_key"].replace("\\n", "\n")
        cred = credentials.Certificate(key_data)
        firebase_admin.initialize_app(cred)
        db = firestore.client()
    else:
        db = None
except Exception:
    db = None

def get_owner_template(name, email, message):
    return f"""
    <html>
        <body style="font-family: 'Inter', sans-serif; background-color: #0c0e14; color: #ffffff; padding: 40px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background: #161a23; border: 1px solid #2d3446; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                <div style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); padding: 30px; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; font-weight: 900;">New Inquiry Received</h1>
                </div>
                <div style="padding: 40px;">
                    <p style="color: #94a3b8; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;">New Transmission Identified</p>
                    <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #6366f1; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                        <p style="margin: 0 0 10px 0;"><strong>Source:</strong> {name}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Endpoint:</strong> {email}</p>
                        <p style="margin: 20px 0 0 0; color: #cbd5e1; line-height: 1.6;">{message}</p>
                    </div>
                </div>
                <div style="background: #0c0e14; padding: 20px; text-align: center; border-top: 1px solid #2d3446;">
                    <p style="margin: 0; color: #475569; font-size: 12px; font-weight: bold; letter-spacing: 1px;">PORTFOLIO | AUTOMATED SYSTEMS</p>
                </div>
            </div>
        </body>
    </html>
    """

def get_visitor_template(name):
    return f"""
    <html>
        <body style="font-family: 'Inter', sans-serif; background-color: #0c0e14; color: #ffffff; padding: 40px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background: #161a23; border: 1px solid #2d3446; border-radius: 20px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); padding: 30px; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 2px;">MESSAGE RECEIVED</h1>
                </div>
                <div style="padding: 40px; text-align: center;">
                    <h2 style="color: #ffffff; margin-bottom: 20px;">Hello {name},</h2>
                    <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                        Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                    </p>
                    <div style="display: inline-block; padding: 15px 30px; border-radius: 50px; background: #6366f1; color: #ffffff; font-weight: bold; text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">
                        Acknowledged
                    </div>
                </div>
                <div style="background: #0c0e14; padding: 20px; text-align: center; border-top: 1px solid #2d3446;">
                    <p style="margin: 0; color: #475569; font-size: 10px; font-weight: bold; letter-spacing: 2px;">VINAY KUMAR | AI SYSTEMS ENGINEER</p>
                </div>
            </div>
        </body>
    </html>
    """

@app.post("/send-email")
async def send_email(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    sender_user = os.getenv("SMTP_EMAIL")
    password = os.getenv("SMTP_PASSWORD")

    if not sender_user or not password:
        return {"status": "error", "message": "SMTP credentials not configured."}

    # 1. Store in Firestore
    if db:
        try:
            db.collection("contacts").document().set({
                "name": name, "email": email, "message": message, "timestamp": datetime.now()
            })
        except Exception as e:
            print(f"Firestore Error: {e}")

    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(sender_user, password)

        # 2. Email to Portfolio Owner (You)
        owner_msg = MIMEMultipart()
        owner_msg["Subject"] = f"New Portfolio Message: {name}"
        owner_msg["From"] = f"Vinay Portfolio <{sender_user}>"
        owner_msg["To"] = sender_user
        owner_msg.attach(MIMEText(get_owner_template(name, email, message), "html"))
        server.sendmail(sender_user, [sender_user], owner_msg.as_string())

        # 3. Confirmation Email to Visitor
        visitor_msg = MIMEMultipart()
        visitor_msg["Subject"] = "Thank you for your message - Vinay Kumar"
        visitor_msg["From"] = f"Vinay Kumar <{sender_user}>"
        visitor_msg["To"] = email
        visitor_msg.attach(MIMEText(get_visitor_template(name), "html"))
        server.sendmail(sender_user, [email], visitor_msg.as_string())

        server.quit()
        return {"status": "success", "message": "Message sent successfully."}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
