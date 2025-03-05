import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import "../css/button.css";
import CountdownTimer from "../components/CountdownTImer";
import Particles from "../components/Particles"; // Importing Particles

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Decoding the Digital: Unveiling the future of tech.";
  const isDesktop = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f8fcff, #e0f2fe)", // Light to e0f2fe
      }}
    >
      {/* Bigger Particles with the Gradient Colors */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#1e3a8a", "#3b82f6", "#0f172a"]} // Blue Gradient Shades
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={150} // Increased Particle Size
          sizeRandomness={1.5} // More Variation in Sizes
          cameraDistance={20}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-6xl w-full py-20 px-6 relative z-10">
        <div 
          className="mb-8 p-2 px-6 rounded-full backdrop-blur-md shadow-lg" 
          style={{ backgroundColor: "rgba(180, 210, 240, 0.2)", border: "1px solid rgba(180, 210, 240, 0.5)" }}
        >
          <p className="text-sm lg:text-lg tracking-widest font-semibold text-blue-900">
            THIAGARAJAR COLLEGE OF ENGINEERING PRESENTS
          </p>
        </div>

        {/* INNOHACKS'25 with the Same Particle Gradient */}
        <h1 className="font-bold lg:text-7xl md:text-6xl text-5xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]">
          INNOHACKS'25
        </h1>

        <div className="mt-6">
          <CountdownTimer targetDate="2025-03-20T00:00:00" />
        </div>

        <p className="text-xl lg:text-2xl mt-4 text-blue-700">
          {typedText}
        </p>
      </div>
    </div>
  );
};

export default Home;
