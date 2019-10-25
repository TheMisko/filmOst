import React, { useEfffect } from "react";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const RightMenu = ({ setSong, song, playlist, increase, setIncrease }) => {
  const nextSong = increase => {
    setIncrease(increase + 1);
    setSong(playlist.naziv[increase + 1]);
  };

  const previousSong = increase => {
    setIncrease(increase - 1);
    setSong(playlist.naziv[increase - 1]);
  };

  console.log(increase);

  return (
    <div className="right-menu-container">
      <div className="right-menu-controls">
        <div className="next" onClick={() => nextSong(increase)}>
          <SkipNextIcon color="primary" fontSize="large" />
        </div>{" "}
        <div className="previous" onClick={() => previousSong(increase)}>
          <SkipPreviousIcon color="primary" fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
