import React, { useState, useEffect } from "react";

const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB"
};

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDateTime = typeof targetDate === 'string' 
      ? new Date(targetDate) 
      : targetDate;

    const calculateTimeLeft = () => {
      const difference = targetDateTime - new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div 
      className="flex flex-col items-center justify-center w-full"
      data-testid="countdown-timer"
    >
      <div 
        className="bg-[#3373B0]/10 backdrop-blur-lg rounded-2xl p-6 sm:p-10 w-full max-w-4xl shadow-2xl"
      >
        <h2 
          className="text-center text-2xl sm:text-3xl font-bold mb-8 text-[#0B385F] tracking-wide uppercase animate-pulse "
          style={{ textShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          Registration Closes In
        </h2>
        
        <div className="flex justify-center items-center space-x-4 sm:space-x-8">
          {timeLeft.days > 0 && (
            <>
              <div className="flex flex-col items-center">
                <div 
                  className="bg-[#3373B0]/20 rounded-xl w-28 h-40 sm:w-36 sm:h-48 flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                  <span 
                    className="text-5xl sm:text-6xl font-bold text-[#0B385F]"
                    style={{ textShadow: '0 4px 6px rgba(0,0,0,0.2)' }}
                  >
                    {formatNumber(timeLeft.days)}
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-[#0B385F]/80">Days</p>
              </div>
              <div className="text-5xl font-light text-[#0B385F]/50 -mb-6">:</div>
            </>
          )}
          
          <div className="flex flex-col items-center">
            <div 
              className="bg-[#3373B0]/20 rounded-xl w-28 h-40 sm:w-36 sm:h-48 flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <span 
                className="text-5xl sm:text-6xl font-bold text-[#0B385F]"
                style={{ textShadow: '0 4px 6px rgba(0,0,0,0.2)' }}
              >
                {formatNumber(timeLeft.hours)}
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#0B385F]/80">Hours</p>
          </div>
          <div className="text-5xl font-light text-[#0B385F]/50 -mb-6">:</div>
          
          <div className="flex flex-col items-center">
            <div 
              className="bg-[#3373B0]/20 rounded-xl w-28 h-40 sm:w-36 sm:h-48 flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <span 
                className="text-5xl sm:text-6xl font-bold text-[#0B385F]"
                style={{ textShadow: '0 4px 6px rgba(0,0,0,0.2)' }}
              >
                {formatNumber(timeLeft.minutes)}
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#0B385F]/80">Minutes</p>
          </div>
          <div className="text-5xl font-light text-[#0B385F]/50 -mb-6">:</div>
          
          <div className="flex flex-col items-center">
            <div 
              className="bg-[#3373B0]/20 rounded-xl w-28 h-40 sm:w-36 sm:h-48 flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-105 "
            >
              <span 
                className="text-5xl sm:text-6xl font-bold text-[#0B385F] "
                style={{ textShadow: '0 4px 6px rgba(0,0,0,0.2)' }}
              >
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#0B385F]/80">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;