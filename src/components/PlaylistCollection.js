import React from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    let playlists = this.props.playlistData.map((playlist) => {
      let className;
      if (this.props.selectedPlaylistId === playlist.id) {
        className = "selected"
      }

      let onPlaylistSelect = () => {
        this.props.onPlaylistSelect(playlist.id)
      }

      return(
        <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
          className={className}
          onPlaylistSelect={onPlaylistSelect}
        />
      )
    })

    return(
      <ul>
        {playlists}
      </ul>
    )
  }
}


export default PlaylistCollection;
