import React, { useState } from 'react';
import backButton from '/images/Back-Icon.png';
import playButton from '/images/Play-Button.png';
import pauseButton from '/images/Pause-Button.png';
import shuffleButton from '/images/Shuffle-Icon.png';

export default function PlayControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center cursor-pointer space-x-8">
      <button className="text-sm font-medium">
        1x
      </button>
      
      <button>
        <img src={backButton} alt="Back" className="h-8 w-8" />
      </button>
      
      <button 
        className="p-3 cursor-pointer"
        onClick={handlePlayPause}
      >
        <img 
          src={isPlaying ? pauseButton : playButton} 
          alt={isPlaying ? "Pause" : "Play"} 
          className="h-8 w-8" 
        />
      </button>
      
      <button>
        <img src={backButton} alt="Forward" className="h-8 w-8 rotate-180" />
      </button>
      
      <button>
        <img src={shuffleButton} alt="Shuffle" className="h-8 w-8" />
      </button>
    </div>
  );
}