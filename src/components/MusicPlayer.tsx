import { useEffect, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import { PlayListItem } from "./PlayListItem";
import AudioPlayer from "./AudioPlayer";

export interface Song {
  artist: string;
  cover: string;
  duration: number;
  genre: string;
  id: string;
  song: string;
  title: string;
}

export default function MusicPlayer() {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState('');
  const [volume, setVolume] = useState(0.75);
  const [speed, setSpeed] = useState(1.0);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await fetch('/api/v1/playlist');
      const data = await response.json();
      
      const detailedSongs = await Promise.all(data.map(async (song: Song) => {
        const songDetailsResponse = await fetch(`/api/v1/songs/${song.id}`);
        const songDetails = await songDetailsResponse.json();
        return { ...song, ...songDetails };
      }));
      
      setPlaylist(detailedSongs);
      setLoading(false);
    };
    fetchPlaylist();
  }, []);

  useEffect(() => {
    if (playlist.length > 0) {
      setSong(playlist[currentSong].song);
    }
  }, [currentSong, playlist]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 bg-red-300 dark:bg-zinc-600 rounded-lg">
      <div className="md:col-span-3">
        <CurrentlyPlaying
          loading={loading}
          playlist={playlist}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setVolume={setVolume}
          volume={volume}
          setSpeed={setSpeed}
          speed={speed}
        />
        {song && (
          <AudioPlayer 
            songUrl={song} 
            isPlaying={isPlaying} 
            volume={volume} 
            speed={speed} 
          />
        )}
      </div>
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-lg font-bold dark:text-white mb-4">Playlist</h2>
        <div className="space-y-1">
          {playlist.map((song, index) => (
            <PlayListItem
              key={song.id}
              songName={song.title}
              songTime={song.duration}
              artist={song.artist}
              isPlaying={index === currentSong}
              onClick={() => {
                setCurrentSong(index);
                setIsPlaying(true);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}