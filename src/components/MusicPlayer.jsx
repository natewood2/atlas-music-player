import React from 'react';
import useSongs from '../hooks/useSongs';
import CurrentlyPlaying from './CurrentlyPlaying';
import PlayListItem from './PlayListItem';

export default function MusicPlayer() {
  const songs = useSongs();
  console.log(songs);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 bg-red-200 dark:bg-zinc-600 rounded-lg">
      <div className="md:col-span-3">
        <CurrentlyPlaying />
      </div>

      <div className="col-span-1 md:col-span-2">
        <h2 className="text-xl font-bold dark:text-white mb-4">Playlist</h2>
        <div className="space-y-1">
          {songs && songs.length > 0 && (
            songs.map((song) => (
              <PlayListItem 
                key={song.id}
                song={{
                  title: song.title,
                  artist: song.artist,
                  duration: song.duration
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}