import data from './data.json'
export default function TopTracks() {
    // فرز الأغاني بناءً على وقت الاستماع
    const sortedTracks = data
      .sort((a, b) => b.ms_played - a.ms_played)
      .slice(0, 100);



    return (
      <>
      <div className='fasel'></div>
      <div className='bod'>
      <h2 className='title' id='nana'>The Top hundred of musics by the time of listening</h2>
      <ol type='1'>
        {sortedTracks.map((track) => (
          <div>
            <li className='pad' key={track._id.$oid}>
            <h3>truke name : {track.episode_show_name}</h3>
             <h3>time of playing : {track.ms_played}</h3>
            
            </li>
        <div className="line"></div>
          </div>
        ))}
      </ol>
    </div>
      </>
    );
  }
