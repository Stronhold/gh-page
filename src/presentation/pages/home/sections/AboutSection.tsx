import React from "react";
import { Card, CardBody, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../infrastructure/ui/components/common/SectionHeading";

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-4 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better"
          id="about-heading"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <Card className="overflow-hidden">
            <CardBody className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                  <p className="text-foreground-600 mb-4">
                    I'm a passionate Frontend Developer and UI/UX Designer with over 7 years of experience creating beautiful, functional, and accessible web applications.
                  </p>
                  <p className="text-foreground-600 mb-4">
                    My journey in web development began when I moved from a Backend Position to a Frontend Developer role, where I discovered my love for crafting user interfaces and enhancing user experiences. Since then, I've honed my skills in HTML, CSS, JavaScript, and various frontend frameworks.
                  </p>
                  <p className="text-foreground-600 mb-6">
                    Other things I do love: playing guitar, listen to music or going for a walk with Luffy, my dog.
                  </p>
                </div>
                
                <div className="md:col-span-1">
                  <div className="bg-content2 p-6 rounded-lg h-full">
                    <h4 className="text-xl font-semibold mb-4">Personal Info</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-sm text-foreground-500 mb-1">Name</h5>
                        <p className="flex items-center gap-2">
                          <Icon icon="lucide:user" className="text-primary" width={16} height={16} />
                          <span>Sergio Ausin</span>
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm text-foreground-500 mb-1">Email</h5>
                        <p className="flex items-center gap-2">
                          <Icon icon="lucide:mail" className="text-primary" width={16} height={16} />
                          <span>sergio@ausin.dev</span>
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm text-foreground-500 mb-1">Location</h5>
                        <p className="flex items-center gap-2">
                          <Icon icon="lucide:map-pin" className="text-primary" width={16} height={16} />
                          <span>Spain</span>
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm text-foreground-500 mb-1">Availability</h5>
                        <p className="flex items-center gap-2">
                          <Icon icon="lucide:calendar" className="text-primary" width={16} height={16} />
                          <span>Open to opportunities</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        as={Link}
                        href="/CV.pdf"
                        target="_blank"
                        color="primary"
                        endContent={<Icon icon="lucide:download" width={18} height={18} />}
                        className="font-medium w-full"
                        aria-label="Download resume"
                      >
                        Download Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};