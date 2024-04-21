import data from './data.json'
import TopArtest from '../home/TopArtest.css'
export default function TopArtest1() {
    const artistCount = {};
data.forEach(record => {
    const artistName = record.master_metadata_album_artist_name;
    artistCount[artistName] = (artistCount[artistName] || 0) + 1;
  });
  const sortedArtists = Object.entries(artistCount).sort((a, b) => b[1] - a[1]);
const top100Artists = sortedArtists.slice(0, 100).map(artist => artist[0]);

console.log(top100Artists);
return(
    <div className="bod">
        {/* <SideBar /> */}
        <p className="padPar">The Top Artest :</p>
        <ol>{top100Artists.map(el=><div>
            <li className="pad">{el}</li>
            <div className="line"></div>
        </div>)}</ol>
    </div>
)
}