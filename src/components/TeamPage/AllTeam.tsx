import React, { useEffect, useRef } from 'react';
import { Twitter, Instagram, Youtube, Dribbble } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextAnimation from '../ui/AnimationText';
import zyra9 from '../../assets/officeImages/zyra9.jpg';
import zyra7 from '../../assets/officeImages/zyra6.jpg';
import zyra11 from '../../assets/officeImages/zyra11.jpg';
import zyra12 from '../../assets/officeImages/zyra12.jpg';

// Team member images
import pasho from '../../assets/teamImages/pasho.jpg';
import bess from '../../assets/teamImages/bess.jpeg';
import genci from '../../assets/teamImages/genci.jpeg';
import geri from '../../assets/teamImages/geri.jpeg';
import amanda from '../../assets/teamImages/amanda.jpeg';
import ansel from '../../assets/teamImages/ansel.jpg';
import kejdi from '../../assets/teamImages/kejdi.jpg';
import armando from '../../assets/teamImages/armando.jpg';
import xhulio from '../../assets/teamImages/xhulio.jpg';
import eliana from '../../assets/teamImages/eliana.jpg';
import kejsi from '../../assets/teamImages/kejsi.jpg';
import arlind from '../../assets/teamImages/arlind.jpg';
import erald from '../../assets/teamImages/erald.jpg';
import fjona from '../../assets/teamImages/fjona.jpeg';
import ilvio from '../../assets/teamImages/ilvio.jpg';
import juli from '../../assets/teamImages/juli.jpg';
import vasjan from '../../assets/teamImages/vasjan.jpg';
import artemisa from '../../assets/teamImages/artii.jpeg';
import zyra2 from '../../assets/officeImages/zyra2.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);




const officeImages = [zyra9,zyra11,zyra2,zyra7];
const teamImages = [pasho, genci, bess, amanda, geri, ansel, kejdi, armando, xhulio, eliana, kejsi, arlind, erald,juli, vasjan,ilvio,artemisa ,fjona];
const teamPhotoUrl = zyra9;
const meetingPhotoUrl = zyra2;

const teamMembers = [
  {
    name: 'Pasho Toska',
    role: 'Founder & CEO',
    imageUrl: pasho,
  },
  {
    name: 'Genci',
    role: 'Senior Software Engineer',
    imageUrl: genci,
  },
  {
    name: 'Besa',
    role: 'Frontend Developer',
    imageUrl: bess,
  },
  {
    name: 'Geri',
    role: 'Software Developer',
    imageUrl: geri,
  },
  {
    name: 'Ansel',
    role: 'Data Science Engineer',
    imageUrl: ansel,
  },
  {
    name: 'Erald',
    role: 'Software Developer',
    imageUrl: erald,
  },
  {
    name: 'Juli',
    role: 'Software Engineer',
    imageUrl: juli, // Using available image
  },
  {
    name: 'Xhulio',
    role: 'Project Manager/Software Developer',
    imageUrl: xhulio,
  },
  {
    name: 'Eliana Kryeziu',
    role: 'Frontend Developer',
    imageUrl: eliana,
  },
  {
    name: 'Kejdi',
    role: 'Product Designer',
    imageUrl: kejdi,
  },
  {
    name: 'Arlind',
    role: 'Frontend Developer',
    imageUrl: arlind,
  },
  {
    name: 'Armando Muco',
    role: 'Backend Developer',
    imageUrl: armando,
  },
  {
    name: 'Artemisa Nuri',
    role: 'Frontend Developer',
    imageUrl: artemisa, // Using available similar image
  },
  {
    name: 'Vasjan Cupri',
    role: 'Software Developer',
    imageUrl: vasjan, // Reusing available image
  },
  {
    name: 'Ilvio Cumani',
    role: 'Frontend Developer',
    imageUrl: ilvio, // Reusing available image
  },
  {
    name: 'Amanda Oshafi',
    role: 'Backend Developer',
    imageUrl: amanda,
  },
  {
    name: 'Fiona',
    role: 'Frontend Developer',
    imageUrl: fjona,
  },
  // {
  //   name: 'Elisabeta Guri',
  //   role: 'Head of HR',
  //   imageUrl: eliana, // Reusing available image
  // },

];


const AllTeam = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const teamSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animations
            gsap.fromTo(headerRef.current, 
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            // Grid cards stagger animation
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 100, scale: 0.8 },
                { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    duration: 0.8, 
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Team members animation
            gsap.fromTo(".team-member",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: teamSectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Section titles animation
            gsap.fromTo(".section-title",
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: ".section-title",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToCardsRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
      
      <div ref={containerRef}>
      <div className=" text-gray-800 py-24 font-sans">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          
          {/* Header Section */}
          <header ref={headerRef} className="text-center my-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-600 mb-4">Embodying Our Codevider Culture & Values</h1>
            <TextAnimation 
              text="Discover how our collaborative spirit and shared values drive exceptional digital solutions."
              as="p"
              classname="text-lg text-gray-600 max-w-2xl mx-auto"
              direction="right"
            />
          </header>
    
          {/* Main Grid Section */}
          <main ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    
            {/* Team Photo */}
            <div ref={addToCardsRefs} className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden h-96 lg:h-auto">
              <img src={teamPhotoUrl} alt="Codevider team collaborating" className="w-full h-full object-cover object-center" />
            </div>
    
            {/* Commitment Card */}
            <div ref={addToCardsRefs} className="lg:row-span-2 bg-gray-800 text-white p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-6xl font-bold">100%</h2>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Commitment</h3>
                <TextAnimation 
                  text="We deliver unwavering commitment and exceptional quality in every engagement."
                  as="p"
                  classname="text-gray-400"
                  direction="left"
                />
              </div>
            </div>
    
            {/* Mission Card */}
            <div ref={addToCardsRefs} className="bg-cyan-100 text-sky-900 p-8 rounded-2xl">
              <h2 className="text-5xl font-bold mb-4">1</h2>
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <TextAnimation 
                text="Our mission is to empower businesses with on‑demand expert teams, accelerating digital innovation."
                as="p"
                classname="text-sky-900"
                direction="right"
              />
            </div>
    
            {/* Innovation Card */}
            <div ref={addToCardsRefs} className="bg-blue-100 text-sky-900 p-8 rounded-2xl">
              <h2 className="text-5xl font-bold mb-4">100%</h2>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <TextAnimation 
                text="We cultivate creativity and continuous learning to deliver cutting‑edge solutions."
                as="p"
                classname="text-gray-800"
                direction="left"
              />
            </div>
    
            {/* Offices & Socials Card */}
            <div ref={addToCardsRefs} className="lg:row-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-5xl font-bold">4</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">Offices</h3>
                <TextAnimation 
                  text="Our modern offices foster collaboration, creativity, and personal growth."
                  as="p"
                  classname="text-gray-800"
                  direction="right"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                <a href="#" aria-label="Twitter" className="bg-sky-300 text-gray-800 h-12 w-12 flex items-center justify-center rounded-xl hover:bg-sky-600 transition-colors"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram" className="bg-sky-300 text-gray-800 h-12 w-12 flex items-center justify-center rounded-xl hover:bg-sky-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" aria-label="YouTube" className="bg-sky-300 text-gray-800 h-12 w-12 flex items-center justify-center rounded-xl hover:bg-sky-600 transition-colors"><Youtube size={20} /></a>
                <a href="#" aria-label="Dribbble" className="bg-sky-300 text-gray-800 h-12 w-12 flex items-center justify-center rounded-xl hover:bg-sky-600 transition-colors"><Dribbble size={20} /></a>
              </div>
            </div>
            
                                        {/* Team Members Card */}
                            <div ref={addToCardsRefs} className="lg:row-span-2 bg-sky-200 text-sky-900 p-8 rounded-2xl flex flex-col justify-center text-center">
                                <p className="text-7xl font-bold">20</p>
                                <h3 className="text-2xl font-bold mt-4">Team Members</h3>
                                <TextAnimation 
                                    text="Meet our diverse team of 20 experts dedicated to excellence at Codevider."
                                    as="p"
                                    classname="mt-2 leading-snug"
                                    direction="left"
                                />
                            </div>
    
            {/* Meeting Photo */}
            <div ref={addToCardsRefs} className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden h-96 lg:h-auto">
              <img src={meetingPhotoUrl} alt="Team brainstorming session" className="w-full h-full object-cover object-center" />
            </div>
          </main>
    
          {/* Text Section 1: Core Values */}
          <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <p className="section-title text-sm font-semibold text-gray-800 tracking-widest uppercase mb-2">Our Core Values</p>
              <TextAnimation 
                text="Collaboration & Transparency"
                as="h2"
                classname="section-title text-4xl md:text-5xl font-bold text-gray-800"
                letterAnime={true}
              />
            </div>
            <div className="md:col-span-2 text-gray-800 space-y-6 text-lg leading-relaxed">
              <TextAnimation 
                text="At Codevider, collaboration and transparency are the cornerstones of our culture. We communicate openly and value every perspective, fostering trust across teams."
                as="p"
                direction="right"
              />
              <TextAnimation 
                text="By working hand‑in‑hand and sharing insights freely, we build stronger solutions and drive collective success for our clients."
                as="p"
                direction="left"
              />
            </div>
          </section>
    
          {/* Text Section 2: Culture */}
          <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <p className="section-title text-sm font-semibold text-gray-800 tracking-widest uppercase mb-2">Our Culture</p>
              <TextAnimation 
                text="Empowering Through Expertise"
                as="h2"
                classname="section-title text-4xl md:text-5xl font-bold text-gray-800"
                letterAnime={true}
              />
            </div>
            <div className="md:col-span-2 text-gray-800 space-y-6 text-lg leading-relaxed">
              <TextAnimation 
                text="We empower our clients by delivering top‑tier talent and best‑in‑class technology solutions tailored to their needs."
                as="p"
                direction="right"
              />
              <TextAnimation 
                text="Integrity and continuous improvement guide our approach, ensuring we exceed expectations and create lasting impact."
                as="p"
                direction="left"
              />
              <TextAnimation 
                text="Our culture of learning and accountability ensures every project is executed with precision and care."
                as="p"
                direction="right"
              />
            </div>
          </section>
        </div>
      </div>
    
      {/* Meet the Team Section */}
      <div ref={teamSectionRef} className=" text-white font-sans">
        <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">Join Our Journey!</p>
            <TextAnimation 
              text="Meet the Codevider Team"
              as="h2"
              classname="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              letterAnime={true}
            />
            <TextAnimation 
              text="We believe in building a culture of respect and empowerment, assembling passionate professionals to deliver outstanding results."
              as="p"
              classname="mt-6 max-w-3xl mx-auto text-lg text-gray-300"
              direction="left"
            />
          </div>
    
          <div className="mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {teamMembers.map((person) => (
              <div key={person.name} className="team-member text-center">
                <img
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                  src={person.imageUrl}
                  alt={`Portrait of ${person.name}`}
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                  <p className="text-gray-400">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default AllTeam;



