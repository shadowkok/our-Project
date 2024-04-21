import data from './data.json'
function DiffrentArtistTrack(props) {
    let newArtist = [];
    data.map(elem =>!newArtist.includes(elem.master_metadata_track_name)&&elem.master_metadata_album_artist_name===props.name?newArtist.push(elem.master_metadata_track_name):null )
    return (
    <div className='hii'>
        <h1>Diffrent Track</h1>
        <h3>{newArtist.length}</h3>
    </div>
    )
}

export default DiffrentArtistTrack
