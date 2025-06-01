import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../infrastructure/ui/components/common/SectionHeading";
import { ExperienceService } from "../../../../application/services/ExperienceService";

export const ExperienceSection: React.FC = () => {
  const experienceService = new ExperienceService();
  const experiences = experienceService.getExperiences();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="experience" 
      className="py-20 px-4 bg-content2"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey"
          id="experience-heading"
        />
        
        <motion.div 
          className="mt-12 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={item}>
              <Card>
                <CardBody className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-foreground-500">
                        <Icon icon="lucide:building" width={16} height={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-500 bg-content3 px-3 py-1 rounded-full text-sm">
                      <Icon icon="lucide:calendar" width={16} height={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <Divider className="my-4" />
                  
                  <div>
                    <h4 className="font-medium mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground-600">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
