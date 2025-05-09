"use client";

import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const SparkleAnimation: React.FC<{ count?: number }> = ({ count = 30 }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < count; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5, // seconds
          duration: Math.random() * 3 + 2, // seconds
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    // Regenerate sparkles periodically or on some trigger if needed
    // const interval = setInterval(generateSparkles, 10000); // Example: regenerate every 10s
    // return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-accent-foreground"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animation: `sparkle-anim ${sparkle.duration}s ${sparkle.delay}s infinite ease-in-out`,
            opacity: 0, // Initial opacity set to 0, animation handles fade-in
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default SparkleAnimation;
