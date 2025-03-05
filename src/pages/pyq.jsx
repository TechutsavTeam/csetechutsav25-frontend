import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image.png"; // Import images
import image2 from "../assets/workshop.png";
import image3 from "../assets/event.png";

const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB",
  neonBlue: "#00B4FF",
  glowBlue: "#00E5FF"
};

const PastYearHighlights = () => {
  const [activeEntries, setActiveEntries] = useState([false, false, false]);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveEntries(prev => {
              const newEntries = [...prev];
              newEntries[index] = true;
              return newEntries;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs[index].current) {
          observer.unobserve(sectionRefs[index].current);
        }
      });
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-gray-50"
      style={{
        background: `linear-gradient(135deg, ${theme.aliceBlue} 0%, ${theme.columbiaBlue} 100%)`,
      }}
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{
              background: `linear-gradient(to right, ${theme.eerieBlack}, ${theme.berkeleyBlue})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            PAST YEAR HIGHLIGHTS
          </h1>
          <div 
            className="h-1 w-32 mx-auto mt-4 rounded-full"
            style={{ background: `linear-gradient(to right, ${theme.uclaBlue}, ${theme.columbiaBlue})` }}
          ></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-neon-blue to-transparent"
            style={{ 
              background: `linear-gradient(to bottom, transparent, ${theme.neonBlue}, transparent)`,
              opacity: 0.7 
            }}
          />

          {/* Timeline Entries */}
          <div className="relative space-y-16 py-16">
            {/* First Timeline Entry */}
            <div 
              ref={sectionRefs[0]}
              className={`flex items-center w-full transition-all duration-1000 ${
                activeEntries[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="w-full md:w-1/2 md:pr-8">
                <div 
                  className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-neon-blue transition-all"
                  style={{ 
                    borderColor: theme.neonBlue,
                    boxShadow: `0 0 15px 0 ${theme.neonBlue}40`
                  }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Multi-College Participation</h2>
                  <p className="text-gray-600">
                    TECHUTSAV 2024 witnessed an unprecedented level of inter-collegiate engagement, bringing together over 25 engineering colleges from across Tamil Nadu. Students from diverse backgrounds collaborated, shared insights, and pushed the boundaries of technological innovation.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2 pl-8">
                <motion.img 
                  src={image1} // Use imported image
                  alt="Multi-College Participation"
                  className="rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Second Timeline Entry */}
            <div 
              ref={sectionRefs[1]}
              className={`flex items-center w-full md:flex-row-reverse transition-all duration-1000 ${
                activeEntries[1] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="w-full md:w-1/2 md:pl-8">
                <div 
                  className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-neon-blue transition-all"
                  style={{ 
                    borderColor: theme.neonBlue,
                    boxShadow: `0 0 15px 0 ${theme.neonBlue}40`
                  }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Innovative Tech Workshops</h2>
                  <p className="text-gray-600">
                    We curated a series of cutting-edge technology workshops focusing on emerging domains. These hands-on sessions provided students with practical skills and insights from industry experts.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2 pr-8">
                <motion.img 
                  src={image2} // Use imported image
                  alt="Tech Workshops"
                  className="rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Third Timeline Entry */}
            <div 
              ref={sectionRefs[2]}
              className={`flex items-center w-full transition-all duration-1000 ${
                activeEntries[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="w-full md:w-1/2 md:pr-8">
                <div 
                  className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-neon-blue transition-all"
                  style={{ 
                    borderColor: theme.neonBlue,
                    boxShadow: `0 0 15px 0 ${theme.neonBlue}40`
                  }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Industry-Academia Collaboration</h2>
                  <p className="text-gray-600">
                    TECHUTSAV 2024 bridged the gap between academic learning and industry requirements. We hosted engaging tech events fostering innovation and collaboration between students.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2 pl-8">
                <motion.img 
                  src={image3} // Use imported image
                  alt="Industry Collaboration"
                  className="rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastYearHighlights;