



import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const gridRef = useRef(null);

  // GSAP Animation Effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation from bottom with smooth stagger
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(cards,
          {
            y: 60,
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Grid initial state (no animation needed as cards animate individually)
      if (gridRef.current) {
        gsap.set(gridRef.current, {
          opacity: 1
        });
      }

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div id="services" ref={containerRef} className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* Outer wrapper for content padding and max-width */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-10">

        {/* Header Section (Kept minimal as per original code) */}
        <header className="flex items-center justify-between">
          <h2 className="text-xl font-medium"></h2>
          <button className="rounded-full px-6 py-2 text-sm font-medium uppercase tracking-wider text-[#0c4a6e] transition-colors"></button>
        </header>

        {/* Main Content Section */}
        <main className="my-16 md:my-24">
          
          {/* Main Title (Preserved from original code) */}
          <h1 ref={titleRef} className="text-4xl font-semibold leading-tight text-gray-800 md:text-5xl lg:w-4/5">
            We empower the three pivotal market segments that drive innovation, efficiency, and growth.
          </h1>

          {/* Grid Section for the six columns */}
          <div
            ref={gridRef}
            className="mt-16 grid grid-cols-1 gap-8 md:mt-24 lg:grid-cols-3 xl:grid-cols-3"
          >
            {/* Card 1: Start-ups */}
            <div ref={el => cardsRef.current[0] = el} className="relative flex h-full min-h-[280px] flex-col bg-sky-100 p-8 rounded-3xl rounded-tl-lg text-sky-900">
              <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mb-4 mt-4 pr-16 text-2xl font-semibold leading-tight">
                Series A/B Start‑ups
              </h3>
              <div className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-sky-800/90">
                  <li>
                    Ship your product roadmap without unnecessary payroll overhead—stand up
                    a dedicated pod in under two weeks, enabling rapid MVP iteration and
                    fast customer feedback loops.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Enterprise */}
            <div ref={el => cardsRef.current[1] = el} className="relative flex h-full min-h-[280px] flex-col bg-sky-100 p-8 rounded-3xl rounded-tl-lg text-sky-900">
              <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mb-4 mt-4 pr-16 text-2xl font-semibold leading-tight">
                Enterprise Modernisation
              </h3>
              <div className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-sky-800/90">
                  <li>
                    Modernise legacy systems with cloud‑native SaaS architectures—eliminate
                    tech debt, improve maintainability, and reduce total cost of ownership
                    by 25% per McKinsey & Company best practices.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: CRM-Centric Orgs */}
            <div ref={el => cardsRef.current[2] = el} className="relative flex h-full min-h-[280px] flex-col bg-sky-100 p-8 rounded-3xl rounded-tl-lg text-sky-900">
              <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mb-4 mt-4 pr-16 text-2xl font-semibold leading-tight">
                CRM‑Centric Orgs
              </h3>
              <div className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-sky-800/90">
                  <li>
                    Design and implement bespoke CRM workflows that drive a 35% boost in
                    user adoption and deliver an $8.71 return on every dollar spent (Nucleus
                    Research), enhancing customer retention and process efficiency.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4: Marketplace Sellers */}
            <div ref={el => cardsRef.current[3] = el} className="relative flex h-full min-h-[280px] flex-col bg-sky-100 p-8 rounded-3xl rounded-tl-lg text-sky-900">
              <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mb-4 mt-4 pr-16 text-2xl font-semibold leading-tight">
                Marketplace Sellers
              </h3>
              <div className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-sky-800/90">
                  <li>
                    Accelerate your e-commerce growth with seamless integrations, automated order management, and analytics dashboards tailored for multi-channel sellers.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 5: Marketplace Operators */}
            <div ref={el => cardsRef.current[4] = el} className="relative flex h-full min-h-[280px] flex-col bg-sky-100 p-8 rounded-3xl rounded-tl-lg text-sky-900">
              <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mb-4 mt-4 pr-16 text-2xl font-semibold leading-tight">
                Marketplace Operators
              </h3>
              <div className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-sky-800/90">
                  <li>
                    Streamline onboarding, payments, and dispute resolution with robust platform tools—scale your marketplace with confidence and operational efficiency.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 6: Marketplace SaaS Providers */}
            <div ref={el => cardsRef.current[5] = el} className="relative flex h-full min-h-[280px] flex-col bg-sky-100 p-8 rounded-3xl rounded-tl-lg text-sky-900">
              <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mb-4 mt-4 pr-16 text-2xl font-semibold leading-tight">
                Marketplace SaaS Providers
              </h3>
              <div className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-sky-800/90">
                  <li>
                    Deliver white-label marketplace solutions with modular APIs, scalable infrastructure, and built-in compliance for rapid go-to-market.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;