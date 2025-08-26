import React, { useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Glimpse from '@/components/Glimpse';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const LandingPage = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: '#F5F7FA',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#4A90E2',
      },
      links: {
        color: '#4A90E2',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  return (
    <div className="bg-[--color-clean-slate] font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 text-center">
          <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} className="absolute inset-0 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-[#4b5563] leading-tight md:text-6xl">
              Confidence is your best counteroffer. We help you build it.
            </h1>
            <p className="mt-6 text-lg text-[#4b5563]">
              Transform your negotiation approach with AI-powered insights.
            </p>
            <div className="mt-8">
              <Button variant="primary" className="text-lg px-8 py-4">
                Get Your Glimpse
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <FadeInSection>
          <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[--color-text-primary]">A Clear Path to a Better Deal</h2>
                <p className="mt-4 text-lg text-[#4b5563]">Three simple steps to build your confidence.</p>
              </div>
              <div className="mt-12 grid gap-10 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[--color-action-blue] text-white mx-auto">
                    {/* Icon Placeholder */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[--color-text-primary]">1. Upload Your Document</h3>
                  <p className="mt-2 text-base text-[#4b5563]">Securely upload your contract, job offer, or any negotiation document.</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[--color-action-blue] text-white mx-auto">
                    {/* Icon Placeholder */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[--color-text-primary]">2. AI-Powered Analysis</h3>
                  <p className="mt-2 text-base text-[#4b5563]">Our AI analyzes your text, highlighting key areas for improvement and suggesting stronger terms.</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[--color-action-blue] text-white mx-auto">
                    {/* Icon Placeholder */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[--color-text-primary]">3. Negotiate with Confidence</h3>
                  <p className="mt-2 text-base text-[#4b5563]">Walk into your negotiation with clear, actionable advice and the confidence to match.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <Glimpse />
        </FadeInSection>

        {/* Confidence Corner (Social Proof) Section */}
        <FadeInSection>
          <section id="confidence-corner" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[--color-text-primary]">Join Thousands of Confident Negotiators</h2>
                <p className="mt-4 text-lg text-[#4b5563]">Don't just take our word for it.</p>
              </div>
              <div className="mt-12 grid gap-10 md:grid-cols-3">
                {/* Testimonial 1 */}
                <div className="bg-[--color-clean-slate] p-6 rounded-lg">
                  <p className="text-[#4b5563]">"TalkTerms AI gave me the confidence to ask for a 20% raise, and I got it! The AI's suggestions were spot-on."</p>
                  <p className="mt-4 font-semibold text-[--color-text-primary]">- Sarah L., Software Engineer</p>
                </div>
                {/* Testimonial 2 */}
                <div className="bg-[--color-clean-slate] p-6 rounded-lg">
                  <p className="text-[#4b5563]">"As a freelancer, negotiating contracts is my least favorite part. This tool made it so much easier and I secured much better terms."</p>
                  <p className="mt-4 font-semibold text-[--color-text-primary]">- Mike R., Freelance Designer</p>
                </div>
                {/* Testimonial 3 */}
                <div className="bg-[--color-clean-slate] p-6 rounded-lg">
                  <p className="text-[#4b5563]">"I used it for a business deal and it caught a clause that would have cost us thousands. An absolute game-changer."</p>
                  <p className="mt-4 font-semibold text-[--color-text-primary]">- Jessica P., Small Business Owner</p>
                </div>
              </div>
              <div className="mt-16 flex justify-around text-center">
                  <div className="px-4">
                      <p className="text-4xl font-bold text-[--color-action-blue]">15%</p>
                      <p className="mt-2 text-base text-[#4b5563]">Average Salary Increase</p>
                  </div>
                  <div className="px-4">
                      <p className="text-4xl font-bold text-[--color-action-blue]">10,000+</p>
                      <p className="mt-2 text-base text-[#4b5563]">Successful Negotiations</p>
                  </div>
                  <div className="px-4">
                      <p className="text-4xl font-bold text-[--color-action-blue]">4.9/5</p>
                      <p className="mt-2 text-base text-[#4b5563]">User Satisfaction</p>
                  </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <FAQ />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
