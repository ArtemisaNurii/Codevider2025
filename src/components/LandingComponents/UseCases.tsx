import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { ArrowRight } from 'lucide-react';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Utility function to split text into words for animation
const splitTextIntoWords = (text) => {
  return text.split(' ').map((word, index) => (
    <span key={index} className="word-animate inline-block" style={{ marginRight: '0.25em' }}>
      {word}
    </span>
  ));
};

// Animated Text Component
const AnimatedText = ({ children, className = "", delay = 0, duration = 0.8, triggerClass = null }) => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll('.word-animate');
    
    gsap.set(words, { opacity: 0, y: 30, rotationX: -90 });
    
    gsap.to(words, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: duration,
      ease: "back.out(1.7)",
      stagger: 0.1,
      delay: delay,
      scrollTrigger: {
        trigger: triggerClass ? `.${triggerClass}` : textRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, [delay, duration, triggerClass]);

  return (
    <div ref={textRef} className={className}>
      {splitTextIntoWords(children)}
    </div>
  );
};

// Animated Paragraph Component
const AnimatedParagraph = ({ children, className = "", delay = 0 }) => {
  const paragraphRef = useRef(null);

  useLayoutEffect(() => {
    if (!paragraphRef.current) return;

    gsap.fromTo(paragraphRef.current, 
      { 
        opacity: 0, 
        y: 40,
        filter: "blur(8px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [delay]);

  return (
    <p ref={paragraphRef} className={className}>
      {children}
    </p>
  );
};

const ArrowIcon = ({ className = "stroke-black" }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SquigglyLine = () => (
    <svg width="150" height="10" viewBox="0 0 150 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5.5C1 5.5 10.8333 0.5 16 5.5C21.1667 10.5 30.5 0.5 36.1667 5.5C41.8333 10.5 48 0.5 55.1667 5.5C62.3333 10.5 70.5 0.5 76.6667 5.5C82.8333 10.5 91 0.5 97.1667 5.5C103.333 10.5 112 0.5 117.167 5.5C122.333 10.5 130 5.5 149 5.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);




const Pill = ({ text }) => (
            <span className="bg-sky-200 text-black px-5 py-2 rounded-full font-semibold text-sm">
        {text}
    </span>
);

const ViewAllButton = () => {
    const buttonRef = useRef(null);
    const arrowRef = useRef(null);
  
    useEffect(() => {
        if (!buttonRef.current) return;
        gsap.fromTo(buttonRef.current,
            { opacity: 0, y: 50, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: 0.4,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);
  
    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, { scale: 1.05, backgroundColor: "#374151", color: "#FFFFFF", duration: 0.3, ease: "power2.out" });
      gsap.to(arrowRef.current, { x: 8, duration: 0.3, ease: "power2.out" });
    };
  
    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, { scale: 1, backgroundColor: "transparent", color: "#374151", duration: 0.3, ease: "power2.out" });
      gsap.to(arrowRef.current, { x: 0, duration: 0.3, ease: "power2.out" });
    };
  
    const handleClick = () => {
      console.log("Navigating to projects page...");
 
    };
  
    return (
      <div className="flex justify-center mt-10 md:mt-24">
        <button
          ref={buttonRef}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group flex items-center gap-3 px-8 py-4 border-2 border-gray-700 rounded-full text-gray-900 font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          <span>View All Projects</span>
          <span ref={arrowRef} className="transform transition-transform duration-300">
                                  <ArrowRight className="text-xl" />
          </span>
        </button>
      </div>
    );
};
  
const InfoCard = ({ tag, features, subtitle }) => {
  const cardRef = useRef(null);
  const tagRef = useRef(null);

  useLayoutEffect(() => {
    if (!cardRef.current || !tagRef.current) return;

    // Animate the tag first
    gsap.fromTo(tagRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the arrow icon
    const arrowIcon = cardRef.current.querySelector('.arrow-icon');
    if (arrowIcon) {
      gsap.fromTo(arrowIcon,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.3,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef} className="info-card-container relative bg-sky-200 p-8 rounded-3xl flex-grow flex flex-col justify-between min-h-[300px]">
      <div>
        <div ref={tagRef} className="bg-gradient-to-br from-black to-sky-900 text-white text-lg font-semibold px-6 py-2 rounded-full inline-block">
          {tag}
        </div>
      </div>
      <div className="mt-16">
        <AnimatedText className="text-2xl font-medium" delay={0.4} triggerClass="info-card-container">
          {features.join(' → ')}
        </AnimatedText>
        <AnimatedText className="text-2xl font-medium mt-2" delay={0.6} triggerClass="info-card-container">
          {subtitle}
        </AnimatedText>
        <div className="mt-4">
          {/* <SquigglyLine /> */}
        </div>
      </div>
      <div className="arrow-icon absolute top-6 right-6 w-16 h-16 bg-[#f8f7f4] text-gray-900 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform">
        <ArrowIcon />
      </div>
    </div>
  );
};

const MetricCard = ({ value, label, bgColor = 'bg-white', textColor = 'text-black', children }) => {
  const cardRef = useRef(null);
  const valueRef = useRef(null);

  useLayoutEffect(() => {
    if (!cardRef.current || !valueRef.current) return;

    // Animate the card entrance
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the value with a counting effect if it's a number
    const numMatch = value.match(/(\d+)/);
    if (numMatch) {
      const numValue = parseInt(numMatch[1]);
      const prefix = value.split(numMatch[1])[0];
      const suffix = value.split(numMatch[1])[1];
      
      gsap.fromTo(valueRef.current,
        { textContent: prefix + "0" + suffix },
        {
          textContent: value,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          delay: 0.5,
          onUpdate: function() {
            const current = Math.round(this.targets()[0].textContent.match(/\d+/)?.[0] || 0);
            valueRef.current.textContent = prefix + current + suffix;
          },
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [value]);

  return (
    <div ref={cardRef} className={`${bgColor} ${textColor} rounded-3xl flex flex-col p-8 shadow-xl overflow-hidden h-full`}>
      <div className="text-center flex-shrink-0">
        <p ref={valueRef} className="text-7xl font-light">{value}</p>
        <AnimatedText className="text-xl mt-2" delay={0.8}>
          {label}
        </AnimatedText>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center mt-8">
        {children}
      </div>
    </div>
  );
};

// --- NEW Component for Mini Case Study Cards ---
const MiniCaseStudyCard = ({ tag, title, metric, description, index = 0 }) => {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate the card entrance
    tl.fromTo(cardRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: index * 0.1
      }
    );

    // Animate the metric number with a counting effect
    const metricNumber = cardRef.current.querySelector('.metric-number');
    if (metricNumber && metric.value.match(/\d+/)) {
      const numValue = parseInt(metric.value.match(/\d+/)[0]);
      const prefix = metric.value.replace(/\d+/, '');
      
      tl.fromTo(metricNumber,
        { textContent: "0" },
        {
          textContent: numValue,
          duration: 1,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            metricNumber.textContent = prefix + Math.round(this.targets()[0].textContent);
          }
        },
        "-=0.3"
      );
    }
  }, [index, metric.value]);

  return (
    <div ref={cardRef} className="mini-case-study bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-700 px-4 py-1 rounded-full sky font-semibold text-xs uppercase tracking-wider">
          {tag}
        </span>
        <div className="text-right flex-shrink-0 ml-4">
          <p className="metric-number text-4xl font-semibold text-[#0284c7]">{metric.value}</p>
          <p className="text-sm text-gray-700">{metric.label}</p>
        </div>
      </div>
      <AnimatedText className="text-xl font-semibold text-gray-700" delay={0.3} triggerClass="mini-case-study">
        {title}
      </AnimatedText>
      <AnimatedParagraph className="text-gray-700 leading-relaxed mt-2 flex-grow" delay={0.5}>
        {description}
      </AnimatedParagraph>
      <div className="flex justify-end mt-6">
        <div className="w-12 h-12 bg-gradient-to-br from-black to-sky-900 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:bg-gray-800 transition-all duration-300">
          <ArrowIcon className="stroke-white text-white" />
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component (Orchestrator) ---

const SolutionPillars = () => {
    // Data is centralized here, making it easy to update content
    const pageData = {
        navItems: ["OVERVIEW", "CHALLENGE", "SOLUTION", "RESULTS"],
        mainTitle: {
            part1: " Case Studies",
            highlight: "Shows That We Are ",
            part2: "Trustful",
        },
        infoCard: {
            tag: " Growth Success",
            features: [
              "Accelerated Adoption",
              "Scalable Insights",
              "Growth‑Driven UI"
            ],
            subtitle: "Built a dashboard that fueled 50% user growth and continuous momentum",
          },
          
          metric1: {
            value: "75%",
            label: "Average User Growth"
          },
          metric2: {
            value: "40+",
            label: "Growth Initiatives Deployed",
            countries: [
              "Market Expansion",
              "Product Enhancements",
              "Customer Success",
              "Platform Optimizations"
            ]
          },
    };

    // --- NEW Data for Mini Case Studies ---
    const caseStudiesData = [
        {
            tag: "E-commerce",
            title: "Streamlining Checkout for QuiVidia",
            metric: { value: "+45%", label: "Conversion Growth" },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            tag: "SaaS",
            title: "Performance Tuning for NexaCore",
            metric: { value: "3x", label: "Performance Boost" },
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            tag: "FinTech",
            title: "Enhancing Security for CoinTrust",
            metric: { value: "-70%", label: "Security Incidents" },
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ];

    return (
        <div className="bg-[#f8f7f4] text-gray-900 min-h-screen p-6 sm:p-8 lg:p-12 font-sans">

            <main className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-10 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="main-title">
                        <AnimatedText className="text-5xl  font-semibold leading-tight tracking-tighter" delay={0}>
                            {pageData.mainTitle.part1}
                        </AnimatedText>
                        <AnimatedText className="text-5xl max-sm:text-3xl font-semibold leading-tight tracking-tighter bg- px-2 rounded-lg" delay={0.3}>
                            {pageData.mainTitle.highlight}
                        </AnimatedText>
                        <AnimatedText className="text-5xl max-sm:text-3xl font-semibold leading-tight tracking-tighter" delay={0.6}>
                            {pageData.mainTitle.part2}
                        </AnimatedText>
                    </div>
                    <InfoCard 
                        tag={pageData.infoCard.tag}
                        features={pageData.infoCard.features}
                        subtitle={pageData.infoCard.subtitle}
                    />
                </div>

                {/* Middle Column */}
                <div className="lg:col-span-2">
                    <MetricCard value={pageData.metric1.value} label={pageData.metric1.label}>
                        <div className="w-full h-full min-h-[250px]  flex items-center justify-center rounded-lg">
                            <p className="text-gray-700 font-medium">A testament to our success in driving rapid adoption</p>
                        </div>
                    </MetricCard>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-3">
                    <MetricCard 
                        value={pageData.metric2.value} 
                        label={pageData.metric2.label}
                        bgColor="bg-gradient-to-br from-black to-sky-900"
                        textColor="text-white"
                    >
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {pageData.metric2.countries.map(country => <Pill key={country} text={country} />)}
                        </div>
                        <div className="w-full h-full min-h-[150px]  flex items-center justify-center rounded-lg">
                             <p className="text-gray-800 font-medium">New Market Entries</p>
                        </div>
                    </MetricCard>
                </div>
            </main>

            <section className="py-16 max-w-7xl mx-auto  md:py-24">
                <div className="text-center mb-12">
                    <AnimatedText className="text-4xl md:text-5xl font- leading-tight tracking-tighter" delay={0}>
                        More Case Studies
                    </AnimatedText>
                    <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto" delay={0.3}>
                        A glimpse into other challenges we've successfully navigated for our clients.
                    </AnimatedParagraph>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudiesData.map((study, index) => (
                        <MiniCaseStudyCard key={index} {...study} index={index}/>
                    ))}
                </div>
            </section>

            <ViewAllButton />
<div className='m-22'></div>
        </div>
    );
};

export default SolutionPillars;