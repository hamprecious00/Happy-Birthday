"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Music2 } from 'lucide-react';
import { triggerReplayMusic } from './audio-controller'; // Import the trigger function

const FooterSection: React.FC = () => {
  const handleReplayMusic = () => {
    // This function will be connected to the AudioController,
    // possibly via a shared state/context or a direct DOM manipulation if simpler.
    // For now, let's assume it calls a global function or a ref method.
    if (typeof triggerReplayMusic === 'function') {
        triggerReplayMusic();
    } else {
        console.warn("Replay music function not available.");
    }
  };

  return (
    <footer className="py-8 bg-gradient-to-t from-secondary to-background text-center border-t border-border">
      <div className="container mx-auto">
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fadeIn">
          “You are my today and all of my tomorrows. I love you endlessly.”
        </p>
        <p className="text-md font-semibold text-primary mb-6 animate-fadeIn animate-fadeIn-delay-1">
          – Hamphrey <Heart className="inline-block h-5 w-5 text-red-500 fill-red-400" />
        </p>
        
        <Button 
            variant="outline" 
            onClick={handleReplayMusic}
            className="animate-fadeIn animate-fadeIn-delay-2"
            aria-label="Replay birthday song"
        >
          <Music2 className="mr-2 h-5 w-5" /> Replay Birthday Song
        </Button>

        <p className="text-xs text-muted-foreground mt-8 animate-fadeIn animate-fadeIn-delay-3">
          Crafted with love for Winny on her special day - May 15th
          <br />
          &copy; {new Date().getFullYear()} Hamphrey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
