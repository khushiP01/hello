import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, X as XIcon, Users } from 'lucide-react';

const CoreProblem = () => {
  const problems = [
    {
      icon: <Users className="w-6 h-6 text-pastel-blue-text" />,
      bgColor: 'bg-pastel-blue',
      title: "Perfect Scores Aren't Enough",
      description: "With 40,000+ applicants having 4.0 GPAs and perfect test scores, grades alone won't differentiate your child."
    },
    {
      icon: <XIcon className="w-6 h-6 text-pastel-red-text" />,
      bgColor: 'bg-pastel-red',
      title: "Generic Activities Kill Applications",
      description: "Model UN, debate team, and volunteer work are on every application. Admissions officers skip right past them."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-pastel-orange-text" />,
      bgColor: 'bg-pastel-orange',
      title: "No Coherent Story",
      description: "Random activities don't build a compelling narrative. Top universities want to see passion, growth, and impact."
    }
  ];

  return (
    <section id="problem" className="py-24 px-4 bg-gradient-pastel-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Why Brilliant Students Still Get Rejected
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every top university already has thousands of students with perfect scores. What they admit are students who stand out through spikes, leadership, and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-card rounded-2xl p-8 subtle-border card-shadow"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${problem.bgColor} mb-5`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProblem;



