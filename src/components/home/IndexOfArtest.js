import data from "./data.json";
export default function IndexOfArtest(props) {
  const artistCount = {};
  data.forEach((record) => {
    const artistName = record.master_metadata_album_artist_name;
    artistCount[artistName] = (artistCount[artistName] || 0) + 1;
  });
  const sortedArtists = Object.entries(artistCount).sort((a, b) => b[1] - a[1]);
  const top100Artists = sortedArtists.slice(0, 100).map((artist) => artist[0]);
  let index =top100Artists.indexOf(props.name);
  if (index===-1) {
    return (
        <div className='hii'>
    <h1> the artist: {props.name}</h1> 
    <h2>{'not in the top 100 list'}</h2>
    </div>
)
}
  return <div className='hii'>
  <h1> the artist: {props.name}</h1> 
  <h2>is on index:{index}</h2>
  </div>
}
