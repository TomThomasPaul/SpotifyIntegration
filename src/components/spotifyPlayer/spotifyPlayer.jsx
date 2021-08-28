import React from 'react';
import '../spotifyPlayer/spotifyPlayer.scss'

const Player = props => {
    const backgroundStyles = {
      backgroundImage:`url(${props.item.album.images[0].url})`,
    };
    
    const progressBarStyles = {
      width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
    };
    
    return (
      <div className="Player">
        <div className="bg-image">
         <img src="https://lockpaperscissors.co/wp-content/uploads/spotify-theme-music-bkg-dark.png"></img>
        </div>
        <div className="main-wrapper">
          <div className="now-playing__img">
            <img src={props.item.album.images[0].url} />
          </div>
          <div className="now-playing__side">
            <div className="now-playing__name">{props.item.name}</div>
            <div className="now-playing__artist">
              {props.item.artists[0].name}
            </div>
            <div className="now-playing__status">
              {props.is_playing ? "Playing" : "Paused"}
            </div>
            <div className="progress">
              <div
                className="progress__bar"
                style={progressBarStyles}
              />
              
            </div>
            <div className="spotify-btn">
                {console.log(props.item.external_urls.spotify)}

            <a href={`${props.item.external_urls.spotify}`} target="_blank">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVl1QCvJv2oiYiP4_jMo-RY4uG5yBOLXJPqoFVM1HYpe8vHMSdObxSAdICCp2gPdpkbI&usqp=CAU"></img>
            </a>
            </div>
          </div>
          <div className="background" style={backgroundStyles} />
        </div>
      </div>
    );
  }
  export default Player;