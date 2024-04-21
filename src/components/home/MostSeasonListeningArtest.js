import data from './data.json'
export default function MostSeasonListeningArtest(props) {
  const seasons = {
    winter: 0,
    spring: 0,
    summer: 0,
    Autumn : 0,
  };


  // تحديد الفصل الأكثر تشغيلًا بناءً على التاريخ
  data.forEach((el) => { 
    const month = new Date(el.date).getMonth() + 1;
    if(props.name===el.master_metadata_album_artist_name) {
    if (month === 12 || month === 1 || month === 2) {
      seasons["winter"] += 1;
    }  if (month >= 3 && month <= 5) {
      seasons["spring"] += 1;
    }  if (month >= 6 && month <= 8) {
      seasons["summer"] += 1;
    }  if (month >= 9 && month <= 11) {
      seasons["Autumn "] += 1;
    }
  }});

  const mostPlayedSeason = Object.keys(seasons).reduce((a, b) => (seasons[a] > seasons[b] ? a : b));

  return (
    <div>
      {/* عرض اسم الفصل الأكثر تشغيلًا */}
      <p>the Most season listening is for artest {props.name} is :  </p>
      <p>season : {mostPlayedSeason}</p>
    </div>
  );
}