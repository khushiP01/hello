import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Calendar } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Urgency = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-01-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleBookCall = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  const timerComponents = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-pastel-orange">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            4 Months Can Define Their Future
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deadlines are closing fast. Every week lost reduces profile strength. 
            That's why we only take <span className="font-bold text-primary">30 students per season.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-card rounded-3xl p-8 subtle-border card-shadow max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-pastel-orange-text" />
              <span className="font-semibold text-foreground">Time Until Application Deadlines</span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {timerComponents.map((item, index) => (
                <div key={index} className="bg-secondary rounded-xl p-4 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {item.value !== undefined ? String(item.value).padStart(2, '0') : '00'}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Button 
              onClick={handleBookCall}
              size="lg"
              className="rounded-full text-base font-semibold h-14 px-8 button-shadow group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Consultation Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Urgency;



