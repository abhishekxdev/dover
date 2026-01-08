
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import AnalyticsFeature from './components/AnalyticsFeature';
import ProcessSteps from './components/ProcessSteps';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Values />
        <AnalyticsFeature />
        <ProcessSteps />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
