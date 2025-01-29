import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

export default function VolumeControls() {
  const [value, setValue] = useState(75);
  //const [value, setValue] = useState(50);

  return (
    <div className="flex w-full items-center space-x-2">
      <Volume2 className="" size={20} />
      <div className="relative flex-1">
        <input
          type="range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min="0"
          max="100"
          className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-black/25"
          style={{
            backgroundImage: `linear-gradient(to right, black ${value}%, transparent ${value}%)`,
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </div>
  );
}
