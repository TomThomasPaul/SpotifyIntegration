import React from 'react';
import '../login/login.scss'

const Login =()=>{

const authEndpoint="https://accounts.spotify.com/authorize?";
const clientId = "2812a7bc708c4ad0adc3b4bf7dc0e3cd";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private"
];
return <div className='login'>
       

         <div className="bg-image">
         <img src="https://technext.ng/wp-content/uploads/2018/03/Spotify-January-2016-Monthly-Playlist-Indie-Underground-Aaron-McMillan-1070x580.jpg"></img>
        </div> 
        
        <div className="login-img">
        <a href = {`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkT8uyvPfcoISa_a6OcBy2TWFex-AGruAyQCjmqtvOgH-pDSP_hpuMDuOTD8KuYKhPLA&usqp=CAU"></img>
          <span className="lgn-text">Login</span>
        </a>

        </div>
       

        </div>


}

export default Login;