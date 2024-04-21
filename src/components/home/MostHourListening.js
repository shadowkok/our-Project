import data from "./data.json";

export default function Most_hour_listening() {
  let arrTime = new Array(24).fill(0);

  data.forEach((el) => {
    const date = new Date(el.ts);
    const hour = date.getUTCHours();
    arrTime[hour] += el.ms_played;
  });

  return( 
  <div>
    {arrTime.indexOf(Math.max(...arrTime))}
  </div>
)
 }
