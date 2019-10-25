import React from "react";
import Player from "./player";

const AlbumCover = ({ song, playlist, on, increase }) => {
  return (
    <div className="album-cover-container">
      <div className="album-img">
        <img src={playlist.img[0]} />
        <div className="playerPosition">
          <Player song={song} increase={increase} playlist={playlist} on={on} />
        </div>
      </div>
    </div>
  );
};

export default AlbumCover;
