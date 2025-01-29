import { useEffect, useRef } from 'react';

interface AudioPlayer {
  songUrl?: string;
  isPlaying: boolean;
  volume: number;
  speed: number;
}

export default function AudioPlayer({ songUrl, isPlaying, volume, speed }: AudioPlayer) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, songUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  useEffect(() => {
    if (audioRef.current && songUrl) {
      audioRef.current.src = songUrl;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [songUrl]);

  return (
    <audio 
      ref={audioRef}
      preload="auto"
      controls={false}
    />
  );
}
