"use client";

import React, { useState, useEffect } from 'react';

interface CountdownDisplayProps {
  targetDate: string; // ISO string or a string parseable by Date constructor
  targetEventName?: string;
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ targetDate, targetEventName = "our next special moment" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventPassed, setIsEventPassed] = useState(false);

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
        setIsEventPassed(false);
      } else {
        setIsEventPassed(true);
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!targetDate) {
    return <p className="text-muted-foreground">No upcoming date set yet, but it will be amazing!</p>;
  }

  if (isEventPassed) {
    return <p className="text-lg font-semibold text-primary">Looking forward to planning {targetEventName} soon!</p>;
  }

  return (
    <div className="text-center">
      <p className="text-md text-muted-foreground mb-2">Counting down to {targetEventName}:</p>
      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-sm mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="p-3 bg-primary/20 rounded-lg shadow">
            <div className="text-2xl md:text-3xl font-bold text-primary">{String(value).padStart(2, '0')}</div>
            <div className="text-xs uppercase text-muted-foreground">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownDisplay;
