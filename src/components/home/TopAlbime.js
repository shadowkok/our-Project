import data from '../home/data.json';
import '../artists/artists.css'
export default function TopAlbums() {
  
    // إنشاء كائن لتجميع بيانات الألبومات
    const albumMap = {};
  
    // حساب وقت الاستماع لكل ألبوم
    data.forEach((track) => {
      const albumName = track.master_metadata_album_album_name;
      const msPlayed = track.ms_played;
  
      if (!albumMap[albumName]) {
        albumMap[albumName] = 0;
      }
      albumMap[albumName] += msPlayed;
    });
  
    // تحويل الكائن إلى مصفوفة من الألبومات
    const albums = Object.keys(albumMap).map((albumName) => ({
      albumName,
      msPlayed: albumMap[albumName],
    }));
  
    // فرز الألبومات بناءً على وقت الاستماع
    const sortedAlbums = albums
      .sort((a, b) => b.msPlayed - a.msPlayed)
      .slice(0, 100);
  
    return (
      <div className="bod">
        {/* <h2>أعلى 10 ألبومات حسب وقت الاستماع</h2> */}
        <div className ="fasel"></div>
        <ul>
          {sortedAlbums.map((album, index) => (
            <div>
              <li className="pad" key={album.albumName}>
              {index + 1}. {album.albumName}
              </li>
              <div className="line"></div>
            </div>
           
          ))}
        </ul>
      </div>
    );
  }
