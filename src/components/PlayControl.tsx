import backButton from '/images/Back-Icon.png';
import playButton from '/images/Play-Button.png';
import pauseButton from '/images/Pause-Button.png';
import shuffleButton from '/images/Shuffle-Icon.png';

interface PlayControlsProps {
  onNext: () => void;
  onPrevious: () => void;
  onPlayPause: () => void;
  isPlaying: boolean;
  onShuffle?: () => void;
  isShuffled?: boolean;
  speed: number;
  setSpeed: (speed: number) => void;
}

export default function PlayControls({ 
  onNext, 
  onPrevious, 
  onPlayPause, 
  isPlaying, 
  onShuffle,
  isShuffled = false,
  speed,
  setSpeed 
}: PlayControlsProps) {
  const handleSpeedChange = () => {
    const nextSpeed = speed === 2 ? 1 : speed + 0.5;
    setSpeed(nextSpeed);
  };

  return (
    <div className="flex items-center justify-center cursor-pointer space-x-8">
      <button 
        className="text-sm font-medium"
        onClick={handleSpeedChange}
      >
        {speed}x
      </button>
      <button onClick={onPrevious}>
        <img src={backButton} alt="Back" className="h-8 w-8" />
      </button>
      <button 
        className="p-3 cursor-pointer"
        onClick={onPlayPause}
      >
        <img 
          src={isPlaying ? pauseButton : playButton} 
          className="h-8 w-8" 
        />
      </button>
      <button onClick={onNext}>
        <img src={backButton} alt="Forward" className="h-8 w-8 rotate-180" />
      </button>
      {onShuffle && (
        <button onClick={onShuffle}>
          <img 
            src={shuffleButton} 
            className={`h-8 w-8 ${isShuffled ? 'opacity-100' : 'opacity-50'}`}
          />
        </button>
      )}
    </div>
  );
}
