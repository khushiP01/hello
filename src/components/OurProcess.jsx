import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Lightbulb, Users, Package } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    { icon: <Search className="w-7 h-7 text-pastel-blue-text" />, bgColor: 'bg-pastel-blue', title: "Profile Audit", description: "Assess gaps in current activities." },
    { icon: <Palette className="w-7 h-7 text-pastel-purple-text" />, bgColor: 'bg-pastel-purple', title: "Student Brand Design", description: "Set a theme and problem statement for the profile." },
    { icon: <Lightbulb className="w-7 h-7 text-pastel-orange-text" />, bgColor: 'bg-pastel-orange', title: "Design Spike Projects", description: "Identify capstone ideas aligned with academics and skills." },
    { icon: <Users className="w-7 h-7 text-pastel-pink-text" />, bgColor: 'bg-pastel-pink', title: "Execution & Mentorship", description: "Ivy/Oxbridge mentors guide implementation." },
    { icon: <Package className="w-7 h-7 text-pastel-green-text" />, bgColor: 'bg-pastel-green', title: "Showcase Packaging", description: "Present impact in a way admissions officers value." }
  ];

  return (
    <section id="process" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            From Confusion to a Standout Profile
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven 5-step process transforms ordinary applications into extraordinary success stories.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center w-full mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full md:w-5/12"
              >
                <div className="bg-card p-8 rounded-2xl subtle-border card-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${step.bgColor}`}>
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-muted-foreground">STEP {index + 1}</span>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
              <div className="hidden md:flex w-2/12 items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
              </div>
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;



