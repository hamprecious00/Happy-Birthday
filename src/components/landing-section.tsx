"use client";

import React from 'react';
import { Heart } from 'lucide-react';
import SparkleAnimation from './sparkle-animation';

const LandingSection: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-background to-secondary py-20">
      <SparkleAnimation count={50} />
      
      <div className="relative z-10 p-6 rounded-lg ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-fadeIn">
          <span className="font-cursive-greeting">Happy Birthday,</span>
          <br />
          <span className="text-primary font-cursive-greeting">My Love</span> 
          <Heart className="inline-block h-10 w-10 md:h-12 md:w-12 text-red-500 fill-red-400 animate-pulse mx-2" />
          <span className="font-cursive-greeting">Winny</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn animate-fadeIn-delay-1">
          “With every beat of my heart, I celebrate you today.”
        </p>
      </div>
      
      {/* Optional: subtle heart pattern in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none -z-20" style={{
        backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px), radial-gradient(hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px, 30px 30px',
        backgroundPosition: '0 0, 15px 15px'
      }}></div>
    </section>
  );
};

export default LandingSection;
