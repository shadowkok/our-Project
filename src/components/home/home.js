import "../home/home.css";
import data from "../home/data.json";
import Most_hour_listening from "./MostHourListening";
import MostSeasonListening from "./MostSeasonListening";
import TopArtest from "./TopArtest";
import TopAlbums from "./TopAlbime";
import { useState } from "react";

let myData = data.length;

function Card(props) {
  let[ btn,setbtn] =useState(false)
  // let [btn_txt,setbtn_txt] = useState('show')
  let ss= btn ? "clear" :"show"
  const handleClick = () => {
    btn?setbtn(false):setbtn(true)
  };

 

  return (
    <div>
      <div className="Card">
        <p>{props.qu}</p>
        <p>        <button className="btm" onClick={handleClick }>{ss}</button>
        </p>
        {btn&& <span>{props.v} </span>}
        {btn&&<span> {props.m}</span>}
        </div>
      </div>
  );
}
function SmallCard() {
  return (
    <div className="man">
      <div className="SmallCard">
        <p>hii</p>
      </div>
      </div>
  );
}
// function Search() {
//   return (
//     <div>
//       <input className="search" placeholder="Search"></input>
//       </div>
//   );
// }
function SideBar() {
  return (
    <div>
      <aside>
        <div className="side">
          <a href="#nana"><button className="brd" >All</button></a>
          <button className="brd">Top</button>
          <button className="brd">All</button>
          <button className="brd">All</button>
          <button className="brd">All</button>
        </div>
      </aside>
      </div>
  );
}
function Box() {
  return (
    <div>
      <div className="box">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      </div>
  );
}

function Body() {
  // let nams=dat.map(el=>!arr[el.name]?arr.push(el.name):null)
  // let uniqueArray = [...new Set(dat)];
  return (
    <div>
      <div className="body">
        <div className="sections">
          <p>Your data</p>
          <div className="row">
            {/* {
                            dat.map(
                                elm=><Card qus={elm.qus} name={elm.name} lastname={elm.lastname} />
                            )
                        } */}
            <Card qu="how many plays" v={myData} />
            <Card qu="How many diffrent tracks?" v={singlSong.length} />
            <Card qu="How much time spent listening ?" v={ex3} m="secund" />
            <Card qu="Daily avarage time listening?" v={ex4} />
            <Card qu="MostHourListening" v={ex5} />
            <Card className="" qu="MostseasionListening?" v={ex6} />
            <Card qu="artest?"   />
            
            {/* <Most_hour_listening />MostHourListening
            
            <MostSeasonListening/> */}
          </div>
        </div>
        <div className="rows">
          
          
        
        </div>
      </div>
      </div>
  );
}

function Home() {
  return (
    <div>
      <div className="row2" id="#nana">
        <SideBar />
        <Body />
      </div>
      </div>
  );
}

let singlSong = [];
data.map((el) =>
  !singlSong.includes(el.master_metadata_track_name)
    ? singlSong.push(el.master_metadata_track_name)
    : null
);

//general 3
let allListingTime = 0;
data.map((el) => (allListingTime += el.ms_played));

let ex3 = Math.trunc(allListingTime / 1000);

//general 4
let numberDayListing = [];

data.map((el) =>
  !numberDayListing.includes(el.ts.split("T")[0]) && el.skipped === null
    ? numberDayListing.push(el.ts.split("T")[0])
    : null
);
// console.log(numberDayListing);
let ex4 = Math.trunc(allListingTime / 1000 / numberDayListing.length);

//general 5
let ex5= <Most_hour_listening/>
//general6
let ex6= <MostSeasonListening/>
//general7
let ex7= <TopAlbums/>

let houer = [];
// data.map(el=>houer.push(el.ts.getHours()))

// console.log(houer);
const date = new Date(data.ts);

// الحصول على الساعة والدقائق من التاريخ
const hour = date.getHours();
const minutes = date.getMinutes();

// // ترتيب البيانات بناءً على الساعة
// jsonData.sort((a, b) => {
//   const dateA = new Date(a.date);
//   const dateB = new Date(b.date);
//   return dateA.getHours() - dateB.getHours();
// });

// الآن يمكنك استخدام البيانات المرتبة بناءً على الساعة
// console.log(data);

//   return <div>
//     {/* {Prod} */}
 
//     <p>Counter Plays:  <span style={{ color:'red' }}>{data.length} </span>song</p>
//     <p>diffrent tracks: <span style={{ color:'red' }}>{singlSong.length}</span> secand</p>
//     <p>Time listing:  <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000 )}</span> secand</p>
//     <p>Daily avg: <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000)/numberDayListing.length}</span> secund</p>
//     </div>;

export default Home;

// let singlSong=[]
//   data.map(el=>!singlSong.includes(el.master_metadata_track_name) ?singlSong.push(el.master_metadata_track_name):null)

//   //general 3
//   let allListingTime=0
//   data.map(el=>allListingTime+=el.ms_played)

//   //general 4
//   let numberDayListing=[]
//   data.map(el=>!numberDayListing.includes(el.ts.split('T')[0])&&el.skipped===null?numberDayListing.push((el.ts.split('T')[0])):null)
//   console.log(numberDayListing);

//   let houer=[]
//   // data.map(el=>houer.push(el.ts.getHours()))
//   console.log(houer);
//   const date = new Date(data.ts);

// // الحصول على الساعة والدقائق من التاريخ
// const hour = date.getHours();
// const minutes = date.getMinutes();

// // ترتيب البيانات بناءً على الساعة
// jsonData.sort((a, b) => {
//   const dateA = new Date(a.date);
//   const dateB = new Date(b.date);
//   return dateA.getHours() - dateB.getHours();
// });

// // الآن يمكنك استخدام البيانات المرتبة بناءً على الساعة
// console.log(data);

//   return <div>
//     {/* {Prod} */}

//     <p>Counter Plays:  <span style={{ color:'red' }}>{data.length} </span>song</p>
//     <p>diffrent tracks: <span style={{ color:'red' }}>{singlSong.length}</span> secand</p>
//     <p>Time listing:  <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000 )}</span> secand</p>
//     <p>Daily avg: <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000)/numberDayListing.length}</span> secund</p>
//     </div>;
