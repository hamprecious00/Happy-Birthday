"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenLine } from 'lucide-react';

const SpecialMessageSection: React.FC = () => {
  return (
    <section id="message" className="bg-secondary">
      <div className="container mx-auto">
        <Card className="shadow-xl overflow-hidden bg-card/80 backdrop-blur-md">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4 animate-fadeIn">
              <PenLine className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-semibold text-primary animate-fadeIn animate-fadeIn-delay-1">
              A Heartfelt Message Just For You
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-foreground font-special-romantic leading-relaxed animate-fadeIn animate-fadeIn-delay-2">
                My Dearest Winny,
              </p>
              <p className="text-md md:text-lg text-muted-foreground leading-relaxed animate-fadeIn animate-fadeIn-delay-3">
                On this special day, my heart overflows with love and joy for you. You are the sunshine that brightens my world, the melody that fills my life with harmony, and the dream I never want to wake up from. Every moment spent with you is a precious gift I cherish.
              </p>
              <p className="text-md md:text-lg text-muted-foreground leading-relaxed animate-fadeIn animate-fadeIn-delay-4">
                I wish for you all the happiness your heart can hold, all the success your dreams aspire to, and all the love that surrounds you today and always. May your laughter echo through the years and your spirit continue to shine as brightly as it does now.
              </p>
              <p className="text-lg md:text-xl text-foreground font-special-romantic leading-relaxed animate-fadeIn animate-fadeIn-delay-4">
                With all my love, today and forever,
                <br />
                Hamphrey ❤️
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SpecialMessageSection;
