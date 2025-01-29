import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControl';
import VolumeControls from './VolumeControl';
import useSongs from '../hooks/useSongs';

export default function CurrentlyPlaying() {
  const songs = useSongs();
  const currentSong = songs[0];

  return (
    <div className="flex flex-col">
      <div className="aspect-square mb-6">
        <CoverArt src={currentSong?.cover} />
      </div>
      
      <div className="space-y-6">
        <SongTitle song={currentSong} />
        <PlayControls />
        <div className="mt-8">
          <VolumeControls />
        </div>
      </div>
    </div>
  );
}
