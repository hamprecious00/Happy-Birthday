
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';

interface Memory {
  id: string;
  src: string;
  alt: string;
  caption: string;
  hint: string;
}

const memories: Memory[] = [
  { id: '1', src: '/assets/images/1.jpeg', alt: 'Couple on their first date', caption: 'First Magic ✨', hint: 'Photo Shoot' },
  { id: '2', src: '/assets/images/2.jpeg', alt: 'Couple laughing together', caption: 'Magic Abroad', hint: 'Friends laughing' },
  { id: '3', src: '/assets/images/3.jpeg', alt: 'Couple holding hands', caption: 'Forever Us 💖', hint: 'couple hands' },
  { id: '4', src: '/assets/images/4.jpeg', alt: 'Couple enjoying a sunny day', caption: 'Happiness ☀️', hint: 'couple beach' },
  { id: '5', src: '/assets/images/5.jpeg', alt: 'Couple in a cozy setting', caption: 'Two Reinas🌙', hint: 'couple home' },
  { id: '6', src: '/assets/images/6.jpeg', alt: 'Couple on an adventure', caption: 'My Happiness🚀', hint: 'couple travel' },
  { id: '7', src: '/assets/images/7.jpg', alt: 'Couple on their first date', caption: 'Second Magic ✨', hint: 'couple date' },
  { id: '8', src: '/assets/images/8.jpeg', alt: 'Couple laughing together', caption: 'Laughter Echoes 💖', hint: 'couple laughing' },
  { id: '9', src: '/assets/images/9.jpeg', alt: 'Couple holding hands', caption: 'Mine Forever💖', hint: 'couple hands' },
  { id: '10', src: '/assets/images/10.jpeg', alt: 'Couple enjoying a sunny day', caption: 'Sunny Days☀️', hint: 'couple beach' },
  { id: '11', src: '/assets/images/11.jpeg', alt: 'Couple in a cozy setting', caption: 'Cozy Nights🌙', hint: 'couple home' },
  { id: '12', src: '/assets/images/12.jpeg', alt: 'Couple on an adventure', caption: 'Adventures Await 🚀', hint: 'couple travel' },
  { id: '13', src: '/assets/images/13.jpeg', alt: 'Couple on an adventure', caption: 'Adventures Await 🚀', hint: 'couple travel' },
];

const MemoriesGallery: React.FC = () => {
  return (
    <section id="memories" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4 animate-fadeIn">
            <Camera className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary animate-fadeIn animate-fadeIn-delay-1">Cherished Moments</h2>
          <p className="mt-2 text-muted-foreground animate-fadeIn animate-fadeIn-delay-2">A glimpse into your beautiful journey...</p>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary">
          {memories.map((memory, index) => (
            <div key={memory.id} className="snap-center flex-shrink-0 w-80 md:w-96 animate-fadeIn" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
              <Card className="overflow-hidden shadow-lg h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={memory.src}
                      alt={memory.alt}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      data-ai-hint={memory.hint}
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4 bg-card/50 backdrop-blur-sm">
                  <p className="text-md font-medium text-foreground">{memory.caption}</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;
