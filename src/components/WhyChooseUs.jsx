import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Users2, IndianRupee } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <GraduationCap className="w-7 h-7 text-pastel-purple-text" />, bgColor: 'bg-pastel-purple', title: "Ivy League & Oxbridge Mentors", description: "Guidance from mentors trained at the world's top universities." },
    { icon: <Target className="w-7 h-7 text-pastel-green-text" />, bgColor: 'bg-pastel-green', title: "Admissions-Based Frameworks", description: "Our programs are modelled on what actually works in admissions." },
    { icon: <Users2 className="w-7 h-7 text-pastel-blue-text" />, bgColor: 'bg-pastel-blue', title: "High-Touch Mentorship", description: "A strictly limited intake ensures personalized, dedicated support." },
    { icon: <IndianRupee className="w-7 h-7 text-pastel-orange-text" />, bgColor: 'bg-pastel-orange', title: "Transparent Fees", description: "Clear, upfront pricing starting from \u20B91,00,000. No hidden costs." }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-gradient-pastel-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Premium Guidance Backed by Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When your child's future is at stake, choose the agency that delivers proven results with complete transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-card rounded-2xl p-8 subtle-border card-shadow"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-full ${feature.bgColor} mb-5 shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


