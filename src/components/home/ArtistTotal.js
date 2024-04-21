import React from 'react'
import data from '../home/data.json'
function ArtistTotal(props) {
    let newArtist = 0;
    data.map(elem => elem.master_metadata_album_artist_name===props.name ? newArtist++ : null)
return (
    <div className='hii'>
        <h1>Artist Total Play</h1>
        <h1>{props.name}</h1>
        <h3>{newArtist}</h3>
    </div>
)
}

export default ArtistTotal
