const Playlist = ({ playlist, handleLike }) => {
  const addLike = () => {
    handleLike(playlist.id, playlist.likes + 1);
  };

  return (
    <div>
      <div>
        {playlist.name} by {playlist.creator}
      </div>
      <div>{playlist.numOfSongs} songs</div>
      <div>
        {playlist.likes} likes <button onClick={addLike}>like</button>
      </div>
      <div className="playlist-owner">
        Added by <em>{playlist.user.username}</em>
      </div>
    </div>
  );
};

export default Playlist;
