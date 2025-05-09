"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioControllerProps {
  src: string;
  playInitially?: boolean;
  onReplay?: () => void; // Expose a replay function
}

const AudioController: React.FC<AudioControllerProps> = ({ src, playInitially = true }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePlayPause = useCallback(() => {
    if (!audioRef.current) return;
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(error => console.error("Error playing audio:", error));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const replay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().then(() => setIsPlaying(true)).catch(error => console.error("Error replaying audio:", error));
    if (!hasInteracted) setHasInteracted(true);
  };

  useEffect(() => {
    if (audioRef.current && playInitially && hasInteracted) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(error => console.error("Error playing audio initially:", error));
    }
  }, [playInitially, hasInteracted]);
  
  useEffect(() => {
    // This effect captures the replay function passed via a ref or context in a real app.
    // For this example, it's self-contained or used by a parent via ref.
    // Example of how a parent could trigger replay:
    // if (audioControllerRef && audioControllerRef.current) {
    //   audioControllerRef.current.replay = replay;
    // }
  }, [replay]);


  // Auto-play requires user interaction. We'll try to play on mount if allowed or wait for interaction.
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (audioRef.current && playInitially) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true); // Assume successful autoplay means interaction is fine
        } catch (error) {
          console.log("Autoplay was prevented. Waiting for user interaction.");
          // Autoplay was prevented, setIsPlaying(false) is default
        }
      }
    };
    attemptAutoplay();

    const currentAudioRef = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    if (currentAudioRef) {
        currentAudioRef.addEventListener('ended', handleEnded);
    }
    return () => {
        if (currentAudioRef) {
            currentAudioRef.removeEventListener('ended', handleEnded);
        }
    };
  }, [playInitially]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 p-2 bg-card/80 backdrop-blur-sm rounded-lg shadow-lg">
      <audio ref={audioRef} src={src} loop />
      <Button variant="ghost" size="icon" onClick={togglePlayPause} aria-label={isPlaying ? "Pause music" : "Play music"}>
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <Button variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>
       {/* Expose replay functionality to the parent for the footer button */}
       <button onClick={replay} id="hiddenReplayButton" style={{ display: 'none' }}></button>
    </div>
  );
};

// Expose replay for FooterSection via a global or context, or simply by querying the button
export const triggerReplayMusic = () => {
  const btn = document.getElementById('hiddenReplayButton');
  if (btn) btn.click();
}

export default AudioController;
