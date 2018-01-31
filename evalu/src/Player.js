import React from 'react';
import ReactPlayer from 'react-player';



export default (props) => {
  return (
/*création du player et de ses boutons pour création du Player*/ 
      <div >
    <ReactPlayer className='react-player'  url='http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4' width='40%' height='40%' playing />
       <button className="play" >Play </button>
       <button className="pause" >Pause </button>
       <button className="arriere" >-30sec </button>
       <button className="futur" >+30sec </button>
      </div>
      
  );
};

