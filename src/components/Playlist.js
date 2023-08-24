const Playlist = ({ playlist }) => {
  return (
    <div>
      <div>
        {playlist.name} by {playlist.creator}
      </div>
      <div>{playlist.numOfSongs} songs</div>
      <div>{playlist.likes} likes</div>
      <div className="playlist-owner">
        Added by <em>{playlist.user.username}</em>
      </div>
    </div>
  );
};

export default Playlist;
