import React from 'react';
import Song from './Song';

const SongCollection = props => {
  let songs = props.songData.map(song =>{
    let className;
    if (props.selectedSongId === song.id) {
      className = "selected"
    }

    let onSongSelect = () => {
      props.onSongSelect(song.id)
    }

    return(
      <Song
        key={song.id}
        id={song.id}
        name={song.name}
        artist={song.artist}
        album={song.album}
        className={className}
        onSongSelect={onSongSelect}
      />
    )
  })
  return(
    <ul>
      {songs}
    </ul>
  )
}
export default SongCollection
