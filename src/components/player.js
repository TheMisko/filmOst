import React, { useState } from "react";
import ReactPlayer from "react-player";
import Volume from "./volume";
import Button from "@material-ui/core/Button";

const Player = ({ song, playlist, on, increase }) => {
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const handlePlayPause = () => {
    setPlaying(playing => !playing);
  };

  const handleDuration = duration => {
    // console.log("onDuration", duration);
    setDuration(duration);
  };

  var minutes = Math.floor(duration / 60);
  var seconds = Math.round(duration - minutes * 60);

  return (
    <div className="player-position">
      {on ? (
        <div>
          <Volume volume={volume} setVolume={setVolume} />
          <div className="song">
            Playing: {""}
            {song}
          </div>
          <div className="player-bottom-cotrolls">
            <div className="player-play-stop">
              <Button onClick={handlePlayPause} size="small" variant="outlined">
                {playing ? "stop" : "play"}
              </Button>
            </div>

            <div className="player-timer">
              0{minutes}:{seconds}
            </div>
          </div>

          <ReactPlayer
            onDuration={handleDuration}
            playing={playing}
            url={playlist.src[increase]}
            height="0px"
            width="0px"
            volume={volume}
            loop={true}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Player;
