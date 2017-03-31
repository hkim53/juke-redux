import React from 'react';
import store from '../store';
import axios from 'axios';
import getLyrics from '../components/getLyrics';
import lyrics from '../action-creators/lyrics';


class LyricsContainer extends React.Component {

    constructor () {
        super();
        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''
        }, store.getState());

        this.handleArtistInput = this.handleArtistInput.bind(this);
        this.handleSongInput = this.handleSongInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

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
        const artist = this.state.artistQuery;
        const song = this.state.songQuery;
        
        axios.get(`/api/lyrics/${artist}/${song}`)
            .then(res => res.data)  
            .then(data => {
                const setLyrics = setLyrics(data.lyric)
                store.dispatch(setLyrics)
            })
    }


    render () {

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

export default LyricsContainer;
