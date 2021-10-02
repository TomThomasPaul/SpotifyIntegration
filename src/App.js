import logo from './logo.svg';
import axios from 'axios';
//import './App.css';
import React from 'react';
import Login from './components/login/loginComponent'

import Player from './components/spotifyPlayer/spotifyPlayer.jsx'
import Homepage from './components/homepage/homepage';
import {Route} from 'react-router-dom';

import {connect} from "react-redux";
import setToken from './redux/user/user-action';
import {setPlaylists,fetchPlaylists} from './redux/playlists/playlist-action';
import UserSearch from './components/search/search';
//import UserSearch from './components/searchHooks/search';
//import UserSearch from './components/search_flexbox/search';


class App extends React.Component{

   constructor(){
    super()

    console.log("constructor");
  }


 
  
 componentDidMount = async()=>{
   console.log("componentid mount");
   const {setToken,fetchPlaylists} = this.props;
   const hash = window.location.hash;

   hash && console.log(hash);
   const token_temp= hash && hash.split("=")[1]; 
   const token_ = token_temp && (token_temp.split("&")[0]);
   token_ && setToken(token_);
   
  
//   const resPlaylists =  token_ && await axios({

//    method:"GET",
//    url: `https://api.spotify.com/v1/me/playlists`,
//    headers:{
//     'Authorization' : `Bearer ${token_}`
//    }


// })
// console.log(resPlaylists);
// resPlaylists && setPlaylists(resPlaylists.data.items)
   
 //implement saga style

 token_ && fetchPlaylists(token_);

  }
 



componentDidUpdate(){

  console.log("component did update");
}

componentDidCatch(){
  console.log("component did catch");
}

componentWillUnmount(){

  console.log("component unmount");
}

  
  
  render(){
    console.log("render component");
    const {playlists,token} = this.props;
    //console.log(playlists);
    return <div>
              {
                !token && <Login></Login>
              }
              
              {token && <Route exact path='/'  render={()=><Homepage  ></Homepage>}></Route> }
              {token && <Route exact path = '/search' render ={()=><UserSearch ></UserSearch>} ></Route>}
              
            </div>
  


  
    
  
     
    }
}
    


    const mapStateToProps =(rootReducer)=>{
      return {

        playlists : rootReducer.playlists.playlists,
        token : rootReducer.token.userToken
      }
    }

    const mapDispatchToProps =(dispatch)=>{
      return {
         
        setToken : token=> dispatch(setToken(token)),
        fetchPlaylists : token=>dispatch(fetchPlaylists(token))
       
      }
    }


export default connect(mapStateToProps,mapDispatchToProps)(App);
