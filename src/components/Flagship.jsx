import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import EventLogo from "../assets/event-logo.png";

const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB"
};

const Flagship = ({ uniqueName, eventName, eventDescription, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", "rgba(255, 255, 255, 0.2)");
  };

  return (
    // <div className="flex flex-col h-screen bg-[#E7F1FB] px-2"> 
      
      <div className="flex justify-center mt-1 items-center flex-grow mb-4">
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          className="relative p-4 w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4 items-center cursor-pointer transition-transform duration-400 ease-in-out transform hover:scale-105 text-center overflow-hidden"
          style={{
            borderRadius: "2rem",
            border: "3px dashed transparent",
            backgroundColor: "#bed4e9",
            background: "radial-gradient(circle, rgba(179, 229, 252, 0.5), rgba(67, 148, 247, 0.3), rgba(10, 52, 94, 0.2))",
            borderImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><polygon fill=\"none\" stroke=\"#3373b0\" stroke-width=\"4\" points=\"50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35\"/></svg>') 1",
          }}
        >
          <img src={EventLogo} alt="Event" className=" w-1/2 md:w-1/3 mb-4" />
          <h1 className="font-bold text-2xl sm:text-3xl text-[#0B385F]">{eventName}</h1>
          <p className="text-justify text-[#0b385f] leading-relaxed px-4 sm:px-10">
            {eventDescription}
            {/* The metaverse is driving innovation across industries, from immersive entertainment experiences and revolutionary education methods to transformative healthcare applications. Companies leveraging virtual environments in retail, architecture, and real estate are reducing costs and accelerating decision-making. As the metaverse evolves, businesses must adapt to stay competitive and unlock new growth opportunities. */}
          </p>
          <Link
            to={`/events/${uniqueName}`}
            className={`px-6 py-2 mt-3 flex items-center gap-2 bg-[#003262] text-white font-semibold rounded-2xl transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-lg ${
              isHovered ? 'pl-6 pr-7' : ''
            } animate-pulse hover:animate-none`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-lg">See more</span>
            <span className="text-2xl">&gt;</span>
          </Link>
      </div>
      </div>
    // </div>
  );
};

export default Flagship;