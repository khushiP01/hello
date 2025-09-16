import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleBookCall = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section className="relative pt-48 pb-32 px-4 text-center overflow-hidden soft-gradient-background">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
            Grades Don’t Get You In.
            <br />
            <span className="gradient-text">Powerful Profiles Do.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            90% of Ivy-level applicants from India have top grades. Most are rejected because their extracurricular profiles don’t prove leadership, originality, or impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          <Button onClick={handleBookCall} size="lg" className="rounded-full text-base font-semibold h-14 px-8 button-shadow group">
            Book a Call with an Ivy League Mentor
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Only 30 spots this cycle — secure yours today</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className="relative mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent z-10"></div>
        <div className="relative max-w-6xl mx-auto p-2 rounded-3xl bg-white/50 border border-gray-200 shadow-xl">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/khushiunvi/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=85b7f9"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;



