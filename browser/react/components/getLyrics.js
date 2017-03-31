import React from 'react';
import setArtist from './setArtist';
import setSong from './setSong';

const getLyrics = (props) => {
    const artistChange = (a) => {
        props.setArtist(a.target.value);
    };
    const songChange = (a) => {
        props.setSong(a.target.value);
    };


    return (
        <div id="lyrics">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <input type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange} />
                    <input type="text" value={props.songQuery} placeholder="Song" onChange={songChange} />
                </div>
                <pre>{props.text || 'Search above!'}</pre>
                <button type="submit">Search for Lyrics</button>
            </form>
        </div>
    )
}

export default getLyrics;
