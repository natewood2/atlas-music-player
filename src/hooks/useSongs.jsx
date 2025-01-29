import { useEffect, useState } from "react";

const useSongs = () => {
  const [playListData, setPlaylistData] = useState([]);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      console.log("making it here");
      const response = await fetch("/api/v1/playlist");
      const data = await response.json();
      console.log("result", data);

      const fetchCoverData = await Promise.all(
        data.map(async (track) => {
          const response = await fetch(`/api/v1/songs/${track.id}`);
          const songData = await response.json();
          return { ...track, cover: songData.cover, song: songData.song };
        })
      );
      
      setPlaylistData(fetchCoverData);
    };

    fetchPlaylistData();
  }, []);

  return playListData;
};

export default useSongs;