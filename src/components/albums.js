import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    height: 180
  },
  container: {
    display: "flex"
  },
  paper: {
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export default function Albums({
  list,
  index,
  playlist,
  setPlaylist,
  info,
  on,
  checked,
  setChecked,
  setOn
}) {
  const classes = useStyles();
  const changePlaylist = playlist => {
    setPlaylist(playlist);
    setOn(true);
    // setChecked(prev => !prev);
  };
  return (
    <>
      {on ? (
        <div>
          {" "}
          <div className={classes.root}>
            <div className={classes.container}>
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Paper elevation={4} className={classes.paper}>
                  <div className="img">
                    <img src={info.img[0]} />
                    {/* <button
                        onClick={() => changePlaylist(list[index])}
                      ></button> */}
                  </div>
                  <svg className={classes.svg}></svg>
                </Paper>
              </Grow>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
