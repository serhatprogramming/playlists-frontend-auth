import { useState, useEffect } from "react";
import Playlist from "./components/Playlist";
import playlistService from "./services/playlistService";
import loginService from "./services/loginService";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [userObject, setUserObject] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    playlistService.getPlaylists().then((playlists) => setPlaylists(playlists));
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const user = await loginService.initiateLogin({
        username,
        password,
      });
      setUserObject(user);
      notify({ message: "Login successful", type: "info" });
    } catch (exception) {
      notify({ message: "Login failed", type: "warning" });
    }
    setUsername("");
    setPassword("");
  };

  const notify = ({ message, type }) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 10000);
  };

  const userLoginForm = () => (
    <form onSubmit={handleLogin}>
      <h3>Log in to playlist application</h3>
      <div>
        username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
  const displayPlaylists = () => (
    <>
      <h2>Playlist Application</h2>
      <em>Howdy, {userObject.username}!</em>
      <h3>Playlists</h3>
      {playlists.map((playlist) => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </>
  );

  return (
    <div>
      {notification && <Notification notification={notification} />}
      {userObject ? displayPlaylists() : userLoginForm()}
    </div>
  );
};

export default App;
