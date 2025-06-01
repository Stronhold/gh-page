import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 
        id={id} 
        className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
      >
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
      </h2>
      <p className="text-foreground-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};
