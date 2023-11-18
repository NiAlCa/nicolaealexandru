import useSWR from 'swr';
import { useEffect, useState } from 'react';
import './LastSong.scss';
import { IoMusicalNotes } from "react-icons/io5";


interface Track {
  name: string;
  artist: { '#text': string };
  image: Array<{ '#text': string }>;
  date?: { uts: string };
}

interface RecentTracksResponse {
  recenttracks: {
    track: Track[];
  };
}

export const LastSong = () => {
  const userName = 'nicopum';
  const apiEndpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=d0a2af076e6ebb65e9a6f4c2d6b050fc&format=json`;

  const fetcher = (url: string): Promise<RecentTracksResponse> => fetch(url).then(res => res.json());

  const { data, error } = useSWR<RecentTracksResponse>(apiEndpoint, fetcher, { refreshInterval: 60000 });

  const [lastSong, setLastSong] = useState<Track | null>(null);

  useEffect(() => {
    if (data && data.recenttracks.track.length > 0) {
      const newSong = data.recenttracks.track[0];
      if (!lastSong || newSong.name !== lastSong.name || (newSong.date && (!lastSong.date || newSong.date.uts > lastSong.date.uts))) {
        setLastSong(newSong);
      }
    }
  }, [data, lastSong]);

  if (error) return <div className="error">Error loading song.</div>;
  if (!lastSong) return <div className="loading">Loading...</div>;

  const songUrl = `https://www.last.fm/music/${encodeURIComponent(lastSong.artist['#text'])}/${encodeURIComponent(lastSong.name)}`;

  return (
    <div className='LastSong'>
      <div className='LastSongTittle'>
        <h5>Last played song</h5>
      </div>

      <div className='LastSongContent'>
        <a href={songUrl} target="_blank" rel="noopener noreferrer">
          {lastSong.image && lastSong.image[2] && lastSong.image[2]['#text'] ? (
            <img src={lastSong.image[2]['#text']} alt={lastSong.name} />
          ) : (
            <div className="no-image"><IoMusicalNotes/></div>
          )}
          <div className='LastSongContentInfo'>
            <div className="song-name">{lastSong.name}</div>
            <div className="artist-name">{lastSong.artist['#text']}</div>
          </div>
        </a>
      </div>
    </div>
  );
};
