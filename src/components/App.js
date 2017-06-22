import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
  }

  handleSongSelect(id) {
    this.setState({selectedSongId: id})
  }

  handlePlaylistSelect(id) {
    let newPlaylistIndex = id - 1
    let playlistDetails = this.props.data.playlists[newPlaylistIndex]
    let selectedPlaylistSongIds = playlistDetails.songs;
    let length = selectedPlaylistSongIds.length
    let randTrack = selectedPlaylistSongIds[Math.floor(Math.random() * length)]
    // let songId = selectedPlaylistSongIds[0]
    this.setState({
      selectedPlaylistId: id,
      selectedSongId: randTrack
    })
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
        return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    let onSongSelect = (id) => {
      this.handleSongSelect(id)
    }

    let onPlaylistSelect = (id) => {
      this.handlePlaylistSelect(id)
    }

    return (
      <div className="App row">
        <div className="small-6 columns">
          <h1>Playlists</h1>
          <PlaylistCollection
            playlistData={data.playlists}
            selectedPlaylistId={this.state.selectedPlaylistId}
            onPlaylistSelect={onPlaylistSelect}
          />
        </div>
        <div className="small-6 columns">
          <h1>Songs</h1>
          <SongCollection
            songData={selectedPlaylistSongs}
            selectedSongId={this.state.selectedSongId}
            onSongSelect={onSongSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
