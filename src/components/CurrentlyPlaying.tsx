import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControl";
import VolumeControls from "./VolumeControl";
import AudioPlayer from "./AudioPlayer";
import { Song } from "./MusicPlayer";

interface CurrentlyPlaying {
  loading: boolean;
  playlist: Song[];
  currentSong: number;
  setCurrentSong: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  isPlaying: boolean;
  setVolume: (volume: number) => void;
  setSpeed: (speed: number) => void;
  speed: number;
  volume: number;
}

export default function CurrentlyPlaying({ 
  loading, 
  playlist, 
  currentSong, 
  setCurrentSong, 
  setIsPlaying, 
  isPlaying, 
  setVolume,
  volume,
  setSpeed, 
  speed 
}: CurrentlyPlaying) {
  const currentSongData = playlist[currentSong];
  console.log("Song:", currentSongData);
  console.log("Loadin:", loading);
  console.log("Playlist:", playlist);
  console.log("index of song", currentSong);

  return (
    <div className="flex flex-col w-full m-auto p-5 md:border-r-3 border-secondary dark:border-bg-color">
      <AudioPlayer
        songUrl={currentSongData?.song}
        isPlaying={isPlaying}
        volume={volume}
        speed={speed}
      />
      <CoverArt 
        src={loading ? undefined : currentSongData?.cover} 
      />
      <SongTitle 
        song={loading ? undefined : {
          title: currentSongData?.title || "",
          artist: currentSongData?.artist || ""
        }}
      />
      <PlayControls
        onNext={() => setCurrentSong((currentSong + 1) % playlist.length)}
        onPrevious={() => setCurrentSong((currentSong - 1 + playlist.length) % playlist.length)}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        isPlaying={isPlaying}
        speed={speed}
        setSpeed={setSpeed}
      />
      <VolumeControls setVolume={setVolume} />
    </div>
  );
}