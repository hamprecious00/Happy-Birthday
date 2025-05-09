"use client"; // This page now needs client components for audio interaction

import React from 'react';
import Head from 'next/head'; // For potential page-specific head tags if needed beyond layout.tsx
import LandingSection from '@/components/landing-section';
import SpecialMessageSection from '@/components/special-message-section';
import MemoriesGallery from '@/components/memories-gallery';
import GiftSection from '@/components/gift-section';
import FooterSection from '@/components/footer-section';
import AudioController from '@/components/audio-controller';

// Placeholder for romantic instrumental music
const romanticMusicSrc = "public/assets/Birthday.mp3"; 
// NOTE: Actual audio file needs to be placed in public/assets folder.
// For now, this will likely 404 unless a placeholder file is added.
// Using a generic placeholder if not available:
// const romanticMusicSrc = "https://www.chosic.com/wp-content/uploads/2022/02/Romantic-Music-For-Your-Video-Wedding-Love-Story-Piano-Cinematic-Atmospheric.mp3";
// Due to external link policies, it's better to use a local placeholder if possible or handle failure gracefully.

export default function WinnyBirthdayPage() {
  return (
    <>
      <Head children={undefined}>
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
