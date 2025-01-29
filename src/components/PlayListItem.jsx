import React from 'react';
import SongTitle from './SongTitle';

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export default function PlayListItem({ song }) {
  if (!song) return null;

  return (
    <div className="flex justify-between items-center p-2 hover:bg-red-50 rounded">
      <SongTitle song={song} />
      <span className="text-gray-500 dark:text-gray-300 text-sm">{formatDuration(song.duration)}</span>
    </div>
  );
}
