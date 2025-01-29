type PlayListItemProps = {
  songName: string;
  songTime: number;
  artist: string;
  isPlaying: boolean;
  onClick: () => void;
}

export function PlayListItem({ songName, songTime, artist, isPlaying, onClick }: PlayListItemProps) {
    const time = songTime.toString();
    const formattedTime = `${time.slice(0, 1)}:${time.slice(1)}`;

    return (
        <div 
            onClick={onClick}
            className={`w-full flex justify-between items-center mb-2 rounded-md cursor-pointer 
                ${isPlaying ? 'bg-secondary dark:bg-bg-color text-white dark:text-secondary' : 'bg-transparent'}`}
        >
            <div className="flex flex-col">
                <p className='font-bold'>{songName}</p>
                <p className='font-bold opacity-70'>{artist}</p>
            </div>
            <p className="font-bold opacity-50">{formattedTime}</p>
        </div>
    );
}