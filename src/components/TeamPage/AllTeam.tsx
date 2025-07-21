import React from 'react';
import TeamMemberCard from './TeamMember';
import Carousel from './Carousel';
import { teamMembers } from './Team';



const CoreValue = ({ title, children }) => (
  <div>
    <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
    <p className="mt-2 text-lg leading-relaxed">{children}</p>
  </div>
);

const CulturePage = () => {
  return (
    <div className=" text-gray-600 font-sans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* --- HEADER SECTION --- */}
        <header className="py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter text-sky-900 sm:text-5xl md:text-6xl">
            The Minds Behind The Mission
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-xl leading-8">
            We are a dedicated group of strategists, creators, and engineers driven by a singular purpose: to build solutions that matter. Our culture is the engine of our innovation, built on a foundation of shared principles and mutual respect.
          </p>
        </header>

        {/* --- CORE VALUES SECTION --- */}
        <section className="py-16 border-t border-b border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl">
              Our Guiding Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-x-8 gap-y-12">
            <CoreValue  title="Unwavering Integrity">
              We operate with transparency and honesty. Trust is our most valuable currency, earned through every decision and interaction.
            </CoreValue>
            <CoreValue title="Purposeful Innovation">
              We challenge the status quo not for the sake of novelty, but to create tangible value and drive meaningful progress for our clients.
            </CoreValue>
            <CoreValue title="Radical Collaboration">
              The best ideas emerge when diverse perspectives converge. We foster an environment of open dialogue where every voice is heard and valued.
            </CoreValue>
          </div>
        </section>
        <section>
          <Carousel />
        </section>

        <main className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-7">
              The architects of our success. Each member brings a unique skill set and a shared commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                motto={member.motto}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default CulturePage;