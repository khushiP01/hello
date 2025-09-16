import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, UserPlus, Star, Link as LinkIcon, Sparkles, Trophy, TrendingUp, BrainCircuit, Users, BookOpen } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const WinningFramework = () => {
  const principles = [
    { icon: <Zap className="w-4 h-4" />, color: 'pastel-orange', title: "Spikes, Not Generalists", description: "1–2 deep areas of expertise matter more than scattered activities." },
    { icon: <UserPlus className="w-4 h-4" />, color: 'pastel-blue', title: "Initiative Over Participation", description: "Founders and leaders stand out; passive members don’t." },
    { icon: <Star className="w-4 h-4" />, color: 'pastel-green', title: "Impact Beats Prestige", description: "Real-world problem solvers > elite program attendees." },
    { icon: <LinkIcon className="w-4 h-4" />, color: 'pastel-purple', title: "Aligned with Academics", description: "Activities must support intended majors and career goals." },
    { icon: <Sparkles className="w-4 h-4" />, color: 'pastel-pink', title: "Originality Wins", description: "No cliché food drives; unique, creative projects shine." },
    { icon: <Trophy className="w-4 h-4" />, color: 'pastel-yellow', title: "Capstone Required", description: "A signature achievement anchors the student’s story." },
    { icon: <TrendingUp className="w-4 h-4" />, color: 'pastel-green', title: "Progression Matters", description: "Growth in scale/responsibility > one-time perfection." },
    { icon: <BrainCircuit className="w-4 h-4" />, color: 'pastel-blue', title: "Interdisciplinary Edge", description: "Cross-field innovation (AI + policy) signals maturity." },
    { icon: <Users className="w-4 h-4" />, color: 'pastel-pink', title: "Collaboration Counts", description: "Mentorship and teamwork build credibility and leadership." },
    { icon: <BookOpen className="w-4 h-4" />, color: 'pastel-purple', title: "Narrative Cohesion", description: "The profile must tell a clear, compelling story." },
  ];

  const handleBookCall = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section id="framework" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            10 Principles Every Successful Profile Follows
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our framework is built on proven strategies that consistently get students into top universities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-secondary/50 rounded-2xl p-6 flex gap-4 subtle-border"
            >
              <div className={`flex-shrink-0 w-6 h-6 bg-${principle.color} text-${principle.color}-text rounded-full flex items-center justify-center mt-1`}
                style={{
                  // Tailwind needs explicit classes; fall back to CSS variables classes declared in index.css
                }}
              >
                {principle.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <Button onClick={handleBookCall} size="lg" className="rounded-full text-base font-semibold h-14 px-8 button-shadow group">
            Build a Winning Profile
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WinningFramework;


