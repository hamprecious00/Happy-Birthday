"use client"; // This page now needs client components for audio interaction

import React from 'react';
import Head from 'next/head'; // For potential page-specific head tags if needed beyond layout.tsx
import LandingSection from '@/components/landing-section';
import SpecialMessageSection from '@/components/special-message-section';
import MemoriesGallery from '@/components/memories-gallery';
import GiftSection from '@/components/gift-section';
import FooterSection from '@/components/footer-section';
import AudioController from '@/components/audio-controller';

// Corrected path for romantic instrumental music in the public/assets folder
const romanticMusicSrc = "/assets/Birthday.mp3"; 
// NOTE: Actual audio file needs to be placed in public/assets folder.
// For now, this will likely 404 unless a placeholder file is added.

export default function WinnyBirthdayPage() {
  return (
    <>
      <Head>
        {/* Preload font or other critical assets if necessary */}
      </Head>
      
      {/* Audio Controller - plays music across the site */}
      {/* 
        NOTE: Audio autoplay policies are strict. Music might not play until user interacts.
        The AudioController component attempts to handle this.
      */}
      <AudioController src={romanticMusicSrc} playInitially={true} />

      <main className="flex-grow">
        <LandingSection />
        <SpecialMessageSection />
        <MemoriesGallery />
        <GiftSection />
      </main>
      
      <FooterSection />
    </>
  );
}
