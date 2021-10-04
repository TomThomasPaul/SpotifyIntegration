import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "../playlist/playlist.scss";
import {fetchPlaylists} from '../../redux/playlists/playlist-action';

const Playlist=({fetchPlaylists,token,playlists})=>{

   useEffect(()=>{
      //saga
      fetchPlaylists(token);

   },[]) //empty array to load only once
    

        console.log(playlists);
        return <div className="playlists">
                
                   {
                           playlists.map(playlist=>{
                               return <div className="widget">

                                          <iframe src={`https://open.spotify.com/embed/playlist/${playlist.id}`} width="100%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                       </div>

                           })
                   }
                   
                   

               

                </div>
}

const mapStateToProps =(rootReducer)=>{
     return {

        playlists : rootReducer.playlists.playlists,
        token : rootReducer.token.userToken
     }

}

const mapDispatchToProps =(dispatch)=>{
   return {
      
     
     fetchPlaylists : token=>dispatch(fetchPlaylists(token)),
    
    
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Playlist);