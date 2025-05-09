"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Film, CalendarDays, Heart } from 'lucide-react';
import CountdownDisplay from './countdown-display';

const GiftSection: React.FC = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [nextDate, setNextDate] = useState('');

  useEffect(() => {
    // Set the next date for the countdown. Example: May 22nd of the current year.
    const currentYear = new Date().getFullYear();
    const countdownTargetDate = new Date(currentYear, 4, 22); // Month is 0-indexed, so 4 is May
    
    // If May 22nd has passed this year, set it for next year.
    if (countdownTargetDate < new Date()) {
      countdownTargetDate.setFullYear(currentYear + 1);
    }
    setNextDate(countdownTargetDate.toISOString());
  }, []);

  const handleOpenBox = () => {
    setIsBoxOpen(true);
  };

  return (
    <section id="surprise" className="bg-secondary">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4 animate-fadeIn">
            <Gift className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8 animate-fadeIn animate-fadeIn-delay-1">A Little Surprise For You!</h2>

        <div className={`relative gift-box ${isBoxOpen ? 'gift-box-open' : ''} max-w-md mx-auto`}>
          {!isBoxOpen && (
            <Card 
              className="p-8 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 bg-accent hover:bg-accent/90 animate-fadeIn animate-fadeIn-delay-2"
              onClick={handleOpenBox}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenBox()}
              aria-label="Open your surprise gift"
            >
              <CardContent className="flex flex-col items-center justify-center text-accent-foreground">
                <Gift className="h-24 w-24 mb-4" />
                <p className="text-xl font-semibold">Click to open your surprise!</p>
                <p className="text-sm">🎁</p>
              </CardContent>
            </Card>
          )}

          {/* Actual box structure for animation (conceptual) - simplified for this component */}
          {/* The click above triggers the class change, and CSS handles the "opening" of the card content below */}
          
          {isBoxOpen && (
            <Card className="shadow-xl rounded-lg overflow-hidden gift-box-contents bg-card">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <Heart className="h-10 w-10 text-red-500 fill-red-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-semibold text-primary mb-3">My Birthday Wish For You</h3>
                  <p className="text-md text-muted-foreground font-special-romantic leading-relaxed">
                    "In your eyes, I've found my home,
                    <br />
                    In your heart, I've found my love.
                    <br />
                    With every year, my love does grow,
                    <br />
                    Like stars above, you brightly glow.
                    <br />
                    Happy Birthday, my dearest Winny, my everything."
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <Film className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="text-xl font-semibold text-primary mb-2">A Special Video Montage</h4>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">(Video placeholder - imagine our beautiful memories here!)</p>
                  </div>
                </div>

                <hr className="border-border" />
                
                <div>
                  <CalendarDays className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CountdownDisplay targetDate={nextDate} targetEventName="our next adventure" />
                </div>

              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
