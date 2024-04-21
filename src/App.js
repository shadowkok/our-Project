import './App.css';
import Home from './components/home/home'
import TopArtest from './components/home/TopArtest';
import TopAlbums from './components/home/TopAlbime';
import TopTracks from './components/home/TopTracks';
import Toop100songlast4week from './components/home/Last6MonthSong'
import ArtistTotal from './components/home/ArtistTotal'
import DiffrentArtistTrack from './components/home/DiffrentArtistTrack'
import PercentageArtist from './components/home/PercentageArtist'
import TimeArtistSpned from './components/home/TimeArtistSpned'
import Top20SongsArtists from './components/home/Top20SongsArtists'
import IndexOfArtest from './components/home/IndexOfArtest'
import MostseasionListening from './components/home/MostSeasonListening';
import MostSeasonListeningArtest from './components/home/MostSeasonListeningArtest';
import { useState } from 'react';
import Artists from './components/artists/artists';
import './components/artists/artists.css'
function App() {
  let[ btn,setbtn] =useState(false)

  const handleClick = () => {
    setbtn(true);
  };

  
  return (
    <div className='App'>
        <Home />
        <Artists/>
        <TopAlbums/>
        <TopTracks/>
        <Toop100songlast4week month={12}/>
        <div className='row23'>
          <ArtistTotal name={'Travis Scott'}/>
          <DiffrentArtistTrack name={'Travis Scott'}/>
          <PercentageArtist name={'Paky'}/>
          <TimeArtistSpned name={'Paky'}/>
          <Top20SongsArtists name={'Paky'}/>
          <IndexOfArtest name ={"Paky"} />
        </div>
        
       <button onClick={handleClick}>click</button>
       <p className='btn2'>{btn && <h1 className='btn1'>{<MostSeasonListeningArtest />}</h1>}</p>
       

    </div>
  );
}

export default (App);

