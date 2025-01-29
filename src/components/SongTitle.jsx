import useSongs from '../hooks/useSongs';
import { useState } from 'react';
import React from 'react';

export default function SongTitle({ song }) {
  if (!song) return null;

  return (
    <div>
      <p className="text-lg dark:text-zinc-200 font-bold">{song.title}</p>
      <p className="text-[#64748B] dark:text-gray-500">{song.artist}</p>
    </div>
  );
}
