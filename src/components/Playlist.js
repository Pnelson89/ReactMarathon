import React from 'react';

const Playlist = (props) => {
  return(
    <li className={props.className} onClick={props.onPlaylistSelect}>{props.name}</li>
  )
}

export default Playlist;
