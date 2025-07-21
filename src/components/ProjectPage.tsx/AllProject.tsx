// src/components/ProjectPage.tsx

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Interfaces and Data (Removed the 'link' property) ---
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  features: string[];
}

// For a real app, you might want to move this data to its own file (e.g., src/data/projects.ts)
// and import it in both ProjectPage and ProjectDetailPage.
export const projectsData: Project[] = [
    { 
      id: 1, 
      title: 'Enterprise CRM Platform', 
      category: 'Web Application', 
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
      description: 'A comprehensive CRM solution designed for large-scale enterprises to manage customer relations, sales pipelines, and marketing campaigns with unparalleled efficiency.', 
      features: ['React.js', 'Node.js', 'PostgreSQL', 'Data Analytics', 'CI/CD Pipeline']
    },
    { 
      id: 2, 
      title: 'AI-Powered Analytics', 
      category: 'Data Science', 
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
      description: 'An advanced analytics dashboard that uses machine learning to provide predictive insights and rich data visualizations for business intelligence.', 
      features: ['Python (Flask)', 'TensorFlow', 'Scikit-learn', 'D3.js', 'AWS SageMaker']
    },
    { 
      id: 3, 
      title: 'Mobile Banking App', 
      category: 'Mobile Application', 
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
      description: 'A secure and intuitive mobile banking application for iOS and Android, featuring biometric login, instant fund transfers, and bill payment services.', 
      features: ['React Native', 'Firebase', 'Biometric Auth', 'PCI Compliance', 'Java/Kotlin']
    },
    { 
      id: 4, 
      title: 'Corporate Branding & Website', 
      category: 'UI/UX Design & Development', 
      imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', 
      description: 'Complete rebranding and a new corporate website for a major tech firm, focusing on a modern UI/UX, accessibility (WCAG 2.1), and a compelling brand story.', 
      features: ['Figma', 'Next.js', 'Contentful CMS', 'GSAP', 'WCAG 2.1']
    },
];

// --- Sub-component for a single project showcase ---
interface ProjectShowcaseProps {
    project: Project;
    index: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, index }) => {
    const showcaseRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (showcaseRef.current) {
                // Animate the entire card container
                gsap.fromTo(showcaseRef.current, 
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: showcaseRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );

                // Stagger animate text content
                if (textRef.current) {
                    gsap.fromTo(textRef.current.children,
                        { opacity: 0, x: -30 },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                            stagger: 0.1,
                            delay: 0.3,
                            scrollTrigger: {
                                trigger: showcaseRef.current,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }

                // Animate image with subtle parallax effect
                if (imageRef.current) {
                    gsap.fromTo(imageRef.current,
                        { opacity: 0, scale: 0.9, rotationY: 10 },
                        {
                            opacity: 1,
                            scale: 1,
                            rotationY: 0,
                            duration: 1.2,
                            ease: 'power3.out',
                            delay: 0.4,
                            scrollTrigger: {
                                trigger: showcaseRef.current,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }
            }
        }, showcaseRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={showcaseRef} className="backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-12 shadow-2xl hover:shadow-sky-500/10 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* Text Content - Takes up more space */}
                <div ref={textRef} className="lg:col-span-3 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-0.5 bg-sky-400"></div>
                        <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">
                            {project.category}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed">
                        {project.description}
                    </p>
                    
                    <div className="space-y-4">
                        <p className="text-gray-400 font-medium text-sm">Technologies Used:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.features.map(feature => (
                                <span key={feature} className="bg-gray-800/60 border border-gray-600/50 text-sky-300 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="pt-4">
                        <Link
                            to={`/projects/${project.id}`} 
                            className="inline-flex items-center gap-2 text-white font-medium bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 group"
                        >
                            View Case Study
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
                
                {/* Image Content - Smaller and more refined */}
                <div ref={imageRef} className="lg:col-span-2 group relative">
                    <div className="relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-48 lg:h-56 object-cover rounded-xl border border-gray-600/50 transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110" 
                        />
                        {/* Decorative overlay */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-sky-400 rounded-full opacity-60"></div>
                        <div className="absolute top-4 right-8 w-1 h-1 bg-sky-300 rounded-full opacity-40"></div>
                    </div>
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-sky-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
            </div>
        </div>
    );
};

// --- Main Project Page Component ---
function ProjectPage() {
    const headerRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate header
            if (headerRef.current) {
                gsap.fromTo(headerRef.current.children,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.2,
                        delay: 0.3
                    }
                );
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="section-large relative overflow-hidden b">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <header ref={headerRef} className="text-center py-16 sm:py-20">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-sky-400"></div>
                        <span className="text-sky-400 font-semibold tracking-widest uppercase text-sm">Use Cases </span>
                        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-sky-400"></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Engineered Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Solutions</span>
                    </h1>
                    
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                        We build robust, scalable, and impactful software solutions. 
                        <span className="block mt-2 text-gray-400">Explore our portfolio of innovative projects.</span>
                    </p>
                    
                    {/* Stats or additional info */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
                        <div className="group">
                            <div className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">50+</div>
                            <div className="text-sm text-gray-400">Projects Delivered</div>
                        </div>
                        <div className="group">
                            <div className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">5+</div>
                            <div className="text-sm text-gray-400">Years Experience</div>
                        </div>
                        <div className="group">
                            <div className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">98%</div>
                            <div className="text-sm text-gray-400">Client Satisfaction</div>
                        </div>
                    </div>
                </header>
                
                <main ref={mainRef} className="py-8 md:py-16 space-y-16 md:space-y-20">
                    {projectsData.map((project, index) => (
                        <ProjectShowcase key={project.id} project={project} index={index} />
                    ))}
                </main>
                
                {/* Bottom CTA Section */}
                <section className="text-center py-16 md:py-20">
                    <div className=" backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can bring your vision to life with cutting-edge technology and expert craftsmanship.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-white font-medium bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 group"
                        >
                            Get In Touch
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProjectPage;