import React from 'react';
import { motion } from 'framer-motion';
import { Code, Paintbrush, MessageCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Pramudya',
    role: 'Developer',
    description: 'Pramudya is the mastermind behind the code. His expertise ensures the platform runs smoothly.',
    icon: <Code size={24} />,
  },
  {
    name: 'Rafi Punk',
    role: 'Designer',
    description: 'Rafi manages the creative aspects of the platform, designing a unique visual experience for users.',
    icon: <Paintbrush size={24} />,
  },
  {
    name: 'Emkafie',
    role: 'Community Manager',
    description: 'Emkafie connects with users, ensuring they have a positive experience and feel supported.',
    icon: <MessageCircle size={24} />,
  },
];

const TeamMember = ({ name, role, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="bg-orange-100 p-3 rounded-full mb-4 text-orange-600"
    >
      {icon}
    </motion.div>
    <h2 className="text-2xl font-bold text-orange-800 mb-2">{name}</h2>
    <p className="font-semibold text-orange-600 mb-2">{role}</p>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export const Team = () => {
  return (
    <main className="bg-gradient-to-b from-white to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Our Amazing Team</h1>
          <p className="text-xl text-orange-600">Meet the talented individuals behind our success</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} {...member} index={index} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Team;