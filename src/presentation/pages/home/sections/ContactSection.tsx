import React from "react";
import { Card, CardBody, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../infrastructure/ui/components/common/SectionHeading";
import { ContactService } from "../../../../application/services/ContactService";

export const ContactSection: React.FC = () => {
  const contactService = new ContactService();
  const contactInfo = contactService.getContactInfo();
  const socialLinks = contactService.getSocialLinks();
  

  return (
    <section 
      id="contact" 
      className="py-20 px-4 bg-content2"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's connect and discuss your project"
          id="contact-heading"
        />
        
        <div className="mt-12">
          <Card className="overflow-hidden">
            <CardBody className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <p className="text-foreground-600 mb-8">
                    Feel free to reach out if you have any questions or would like to work together. 
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                          <Icon icon={info.icon} width={24} height={24} />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-foreground-500 hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground-500">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                    <p className="text-foreground-600 mb-8">
                      Connect with me on social media and stay updated with my latest projects and professional activities.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-10">
                      {socialLinks.map((link, index) => (
                        <motion.a 
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-lg bg-content3 hover:bg-primary hover:text-white transition-all flex items-center gap-3"
                          aria-label={`${link.name} Profile`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                        >
                          <Icon icon={link.icon} width={20} height={20} />
                          <span>{link.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button
                      as={Link}
                      href="mailto:sergio@ausin.dev"
                      color="primary"
                      size="lg"
                      className="font-medium"
                      endContent={<Icon icon="lucide:mail" width={18} height={18} />}
                      fullWidth
                    >
                      Send Me an Email
                    </Button>
                  </div>
                </motion.div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
