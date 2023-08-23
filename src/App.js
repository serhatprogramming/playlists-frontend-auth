import "./App.css";

import { useState, useEffect } from "react";
import Playlist from "./components/Playlist";
import playlistService from "./services/playlistService";

const App = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    playlistService.getPlaylists().then((playlists) => setPlaylists(playlists));
  }, []);

  return (
    <div>
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default App;
