import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="section-divider origin-center"
            />
        </div>
    );
};

export default SectionDivider;
