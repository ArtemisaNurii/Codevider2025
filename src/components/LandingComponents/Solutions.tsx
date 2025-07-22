import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// All icon imports are consolidated here
import { ArrowRight, Users, Layers, Target, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger); 

// --- DATA DEFINITION ---
// Data is moved outside the component to prevent re-declaration on every render.
// An icon map makes the data structure cleaner and easier to manage.
const ICONS = {
  users: Users,
  layers: Layers,
  target: Target,
  handshake: Handshake,
};

const solutionPillarsData = [
  {
    id: 1,
    info: {
      description: "Our dedicated pod teams bring together engineers, product managers, and QA specialists into a seamless cross‑functional squad. Each pod is fully staffed and operational in under two weeks, ensuring your project hits the ground running.",
    },
    card: {
      number: "01.",
      title: "Pod Teams",
      description: null, // Use null for empty values for clarity
      icon: ICONS.users,
      showArrow: true,
    }
  },
  {
    id: 2,
    info: {
      description: "We leverage the power and flexibility of the MERN stack alongside microservices architecture to deliver robust, scalable solutions. This modern tech foundation not only accelerates development cycles but also makes it easier to maintain and evolve your product over time.",
    },
    card: {
      number: "02.",
      title: "Modern Stack",
      description: "MERN & Microservices for 50-% faster releases",
      icon: ICONS.layers,
      showArrow: true,
    }
  },
  {
    id: 3,
    info: {
      description: "Transparency and predictability are baked into every engagement with our outcome-based service level agreements. By closely monitoring scope and deliverables, we consistently keep scope creep under 5%, ensuring projects stay on budget and on schedule.",
    },
    card: {
      number: "03.",
      title: "Outcome SLAs",
      description: null,
      icon: ICONS.target,
      showArrow: true,
    }
  },
  {
    id: 4,
    info: {
      description: "Scale your team up or down month‑to‑month with no long‑term obligations, giving you maximum agility to respond to changing business needs. Our streamlined hiring cycle—averaging just 40 days from request to onboarding—means you can quickly plug talent gaps without compromising on quality.",
    },
    card: {
      number: "04.",
      title: "Flexible Loaning",
      description: null,
      icon: ICONS.handshake,
      showArrow: true,
    }
  },
];


// --- COMPONENT DEFINITIONS ---
// Breaking the UI into smaller components makes the code easier to read and manage.

const InfoColumn = ({ description }) => {
  return (
    <div className="info-column opacity-0"> {/* Animation class */}
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ServiceCard = ({ number, title, description, Icon, showArrow }) => {
  return (
    <div
      className={`service-card group flex flex-col justify-between p-8 rounded-3xl min-h-[400px] text-white cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2.5 bg-gradient-to-br from-black to-sky-900 opacity-0`}
    >
      {/* Top Section */}
      <div>
        <Icon className="text-4xl text-white transform transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125" />
      </div>
      
      {/* Bottom Section */}
      <div>
        <p className="text-lg font-semibold text-white">{number}</p>
        <h3 className="text-3xl font-bold my-2">{title}</h3>
        {/* Conditionally render the description and add consistent margin */}
        {description && <p className="text-white mt-4 mb-6">{description}</p>}
        
        <div className="flex items-center justify-end border-t border-white/30 pt-4">
          {showArrow && (
            <button
              aria-label={`Learn more about ${title}`}
              className="flex items-center justify-center w-12 h-12 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform group-hover:translate-x-2 group-hover:rotate-45"
            >
              <ArrowRight className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// This new component encapsulates the logic for a single pillar column.
const SolutionPillarColumn = ({ pillar }) => {
  const { info, card } = pillar;

  return (
    // This container uses flexbox and gap to space the info and card components.
    // This is more robust than the original solution's spacer divs.
    <div className="flex flex-col justify-between gap-8">
      <InfoColumn description={info.description} />
      <ServiceCard
        number={card.number}
        title={card.title}
        description={card.description}
        Icon={card.icon}
        showArrow={card.showArrow}
      />
    </div>
  );
};


// --- MAIN COMPONENT ---
// The main component is now cleaner and focuses on layout and data flow.
export default function Projectss() {
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main section title
      gsap.fromTo('.section-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate the info text columns
      gsap.fromTo('.info-column', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: {
            trigger: '.solution-pillars-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Animate the service cards
      gsap.fromTo('.service-card', 
        { opacity: 0, y: 80, scale: 0.9 },
        { 
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: {
            trigger: '.solution-pillars-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="bg-[#f8f7f4] text-gray-900 min-h-screen font-sans overflow-x-hidden">
      <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        <header className="mb-16">
          <h1 className="section-title text-5xl max-sm:text-3xl font-semibold max-w-4xl opacity-0">
            Our Solution Pillars
          </h1>
        </header>

        <main>
          {/* The grid is now cleaner, mapping over the data to render the self-contained column component. */}
          <div className="solution-pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionPillarsData.map((pillar) => (
              <SolutionPillarColumn key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </main>
        
      </div>
    </div>
  );
}