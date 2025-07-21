import React from 'react';

const TeamMemberCard = ({ name, role, motto, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-full shadow-md">
      {/* Image with subtle zoom on hover */}
      <img
        className="h-52 w-full object-cover transition-transform duration-500  ease-in-out group-hover:scale-105 filter grayscale"
        src={imageUrl}
        alt={`Professional portrait of ${name}`}
      />

      {/* Overlay with details */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        {/* Info box that slides up and fades in on hover */}
        <div className="p-6 text-white transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm font-light text-gray-300">{role}</p>
          <hr className="my-3 border-t border-gray-600" />
          <p className="text-md font-serif italic text-gray-400">"{motto}"</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard; 