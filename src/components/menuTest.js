import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import Fade from "@material-ui/core/Fade";

const MenuTest = ({
  setSong,
  playlist,
  on,
  setPlaylist,
  list,
  setIncrease
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  const changePlaylist = (index, song) => {
    setPlaylist(list[index]);
    setIncrease(0);
    setSong(song);
  };

  const handleClick = index => {
    setIncrease(index);
    setSong(playlist.naziv[index]);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="menu-icon">
          <IconButton
            onClick={handleChange}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
        <h1>Film OST</h1>
      </div>
      {checked ? (
        <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <div className="menu-albums">
            {list.map((info, index) => (
              <img
                onClick={() => changePlaylist(index, info.naziv[0])}
                src={info.img[0]}
              />
            ))}
          </div>
        </Fade>
      ) : null}
      <div className="film">
        <h1>{playlist.film}</h1>
      </div>
      <div className="track-naziv">
        {playlist.naziv.map((naziv, index) => (
          <div className="menu-track-info">
            <h4>
              Track: {""}
              {index + 1}
            </h4>
            <h3 onClick={() => handleClick(index)}>{naziv}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTest;
