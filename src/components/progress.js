import React from "react";

const Progress = ({ played, setPlayed }) => {
  const handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  const handleSeekChange = e => {
    setPlayed({ played: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = state => {
    // console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  return (
    <td>
      <progress max={1} value={played} />
    </td>
  );
};

export default Progress;
