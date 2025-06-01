import React from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ContactService } from "../../../../application/services/ContactService";

export const HeroSection: React.FC = () => {
  const contactService = new ContactService();
  const socialLinks = contactService.getSocialLinks().slice(0, 3); // Just use first 3 social links

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-4 py-20"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary font-medium mb-2">Hello, I'm</span>
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Sergio Ausin
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground-500 mb-6">
              Frontend Developer
            </h2>
            <p className="text-foreground-600 max-w-md mx-auto md:mx-0 mb-8">
              I create exceptional digital experiences with clean, efficient code and user-centered design principles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                as={Link}
                href="https://github.com/stronhold/"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" width={20} height={20} />}
                className="font-medium"
              >
                View My Work
              </Button>
              <Button 
                as={Link}
                href="#contact"
                variant="bordered"
                size="lg"
                className="font-medium"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex gap-6 mt-10 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground-500 hover:text-primary transition-colors"
                  aria-label={`${link.name} Profile`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon={`logos:${link.name.toLowerCase()}-icon`} width={24} height={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="/sergio.jpeg" 
                alt="Sergio Ausin" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-foreground-500"
          >
            <span className="text-sm">Scroll Down</span>
            <Icon icon="lucide:chevron-down" width={24} height={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
