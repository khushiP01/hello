import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ClosingSection = () => {
  const handleBookCall = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section className="py-32 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
            Give Your Child the Edge Admissions Officers Can’t Ignore
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Don't let another brilliant student become just another rejection statistic. 
            Transform their potential into an irresistible application.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Button 
              onClick={handleBookCall}
              size="lg"
              className="rounded-full text-base font-semibold h-16 px-10 bg-white text-primary hover:bg-white/90 shadow-lg group"
            >
              Book a Call Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;



