import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CoreProblem from '@/components/CoreProblem';
import WinningFramework from '@/components/WinningFramework';
import OurProcess from '@/components/OurProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Urgency from '@/components/Urgency';
import ClosingSection from '@/components/ClosingSection';

function App() {
  return (
    <>
      <Helmet>
        <title>Ivy League Admissions Agency - Premium Profile Building</title>
        <meta name="description" content="Transform your child's college application with our proven framework. 90% of top students get rejected - we build profiles that stand out to Ivy League admissions officers." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <CoreProblem />
          <WinningFramework />
          <OurProcess />
          <WhyChooseUs />
          <Urgency />
          <ClosingSection />
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;



