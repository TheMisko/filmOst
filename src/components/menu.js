import React, { useState } from "react";
import Albums from "./albums";

const Menu = ({ setPlaylist, setOn, playlist, on, list }) => {
  const [checked, setChecked] = React.useState(false);
  const changePlaylist = playlist => {
    setPlaylist(playlist);
    setOn(true);
    setChecked(prev => !prev);
  };
  // console.log(list[0][0].producer);
  console.log(playlist);
  const handleChange = () => {
    setChecked(prev => !prev);
    setOn(true);
    setPlaylist(playlist);
  };
  return (
    <>
      {list.map((info, index) => (
        <div onClick={() => setPlaylist(list[index])} className="img">
          <img src={info.img[0]} />
        </div>
      ))}
      {/* {playlist.map((info, index) => (
        <div>
          <Albums
            playlist={playlist}
            index={index}
            setPlaylist={setPlaylist}
            info={info}
            checked={checked}
            on={on}
            list={list}
            setOn={setOn}
            setChecked={setChecked}
          /> */}
      {/* <button onClick={() => changePlaylist(list[index])}>
            {list[index][0].producer}
          </button> */}
      {/* </div>
      ))}
      <button onClick={handleChange}>OPEN</button> */}
      {/* <div>
        {list.map((info, index) => (
          <div>
            <button onClick={() => changePlaylist(list[index])}>
              {list[index][0].producer}
            </button>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Menu;
