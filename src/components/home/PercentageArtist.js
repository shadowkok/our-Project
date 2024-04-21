import data from './data.json'

function PercentageArtist(props) {
    let newArtist = 0;
    data.map(elem => elem.master_metadata_album_artist_name===props.name ? newArtist++ : null)
    let total = data.length;
return (
    <div className='hii'>
        <h1>{props.name}</h1>
        <h3>{((newArtist * 100) / total).toPrecision(2)} %</h3>
    </div>
)
}

export default PercentageArtist
