import React from "react";
import { Card, CardBody, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../infrastructure/ui/components/common/SectionHeading";
import { SkillService } from "../../../../application/services/SkillService";

export const SkillsSection: React.FC = () => {
  const skillService = new SkillService();
  const frontendSkills = skillService.getFrontendSkills();
  const toolsSkills = skillService.getToolsSkills();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-content2"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies I work with"
          id="skills-heading"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon icon="lucide:code" width={24} height={24} className="text-primary" />
                Frontend Development
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {frontendSkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Tooltip content={skill.name}>
                      <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-content1 hover:bg-content3/50 transition-colors">
                        <Icon icon={skill.icon} width={40} height={40} />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    </Tooltip>
                  </motion.div>
                ))}
              </motion.div>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon icon="lucide:wrench" width={24} height={24} className="text-primary" />
                Tools & Workflow
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {toolsSkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Tooltip content={skill.name}>
                      <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-content1 hover:bg-content3/50 transition-colors">
                        <Icon icon={skill.icon} width={40} height={40} />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    </Tooltip>
                  </motion.div>
                ))}
              </motion.div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
