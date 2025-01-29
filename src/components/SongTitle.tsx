import React from 'react';

interface SongTitleProps {
  song?: {
    title: string;
    artist: string;
  };
}

export default function SongTitle({ song }: SongTitleProps) {
  if (!song) {
    return (
      <div className="mt-8 text-center">
        {/* I dont think this is working */}
        <div className="h-6 w-48 bg-gray-200 animate-pulse rounded-md mb-2"></div>
        <div className="h-4 w-32 bg-gray-200 animate-pulse rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-2">{song.title}</h2>
      <p className="text-gray-500">{song.artist}</p>
    </div>
  );
}