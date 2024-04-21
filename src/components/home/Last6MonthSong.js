import data from '../home/data.json'
import './home.css'
const Toop100songlast4week = (props) => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - props.month);
  
    const topSongs = data
      .filter(song => new Date(song.ts) >= sixMonthsAgo)

  
     const topSongs2= topSongs.sort((a, b) => b.ms_played - a.ms_played)
      .slice(0, 10);
  
    return (
      <div className="TopSongs">
        <h2>Top songs{props.month} in the last month</h2>
        <table border='1'>
          <thead>
            <tr>
              <th>اسم الأغنية</th>
              <th> تاريخ الاغنيةة</th>
              <th>اسم الألبوم</th>
              <th> وقت الاستماع</th>
            </tr>
          </thead>
          <tbody>
            {topSongs2.map((song, index) => (
              <tr key={index}>
                <td>{song.master_metadata_track_name || "malk"}</td>
                <td>{song.ts}</td>
                <td>{song.master_metadata_album_album_name}</td>
                <td>{song.ms_played}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export  default Toop100songlast4week;