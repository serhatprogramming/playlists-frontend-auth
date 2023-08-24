const Playlist = ({ playlist, handleLike }) => {
  return (
    <div>
      <div>
        {playlist.name} by {playlist.creator}
      </div>
      <div>{playlist.numOfSongs} songs</div>
      <div>
        {playlist.likes} likes <button onClick={handleLike}>like</button>
      </div>
      <div className="playlist-owner">
        Added by <em>{playlist.user.username}</em>
      </div>
    </div>
  );
};

export default Playlist;
