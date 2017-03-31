import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import axios from 'axios';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics'

export default class extends Component {

  constructor() {

    super();

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //when the component first mounts, it will run store.subscribe once which returns to you
  // a convenience function which essentially gives you the ability to unsubscribe
  // BUT you have to save it as this.unsubscribe bc it doesn't really exist yet
  // you can then use this at a later time *when your component unmounts*
  // your store will still be subscribed in the meantime and listening
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  //componentWillUnmount when you switch pages and no longer need the LyricsContainer Component!
  //it will unsubscribe from the store bc you don't need to listen to the state anymore.
  componentWillUnmount() {
    this.unsubscribe();
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(event) {
    event.preventDefault();
      if (this.state.artistQuery && this.state.songQuery) {
        store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
      }
  }

  render() {
    return <Lyrics
      text={this.state.text}
      setArtist={this.handleArtistInput}
      setSong={this.handleSongInput}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
    />
  }

}
