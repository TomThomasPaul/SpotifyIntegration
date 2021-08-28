import React from 'react';
import { connect } from 'react-redux';
import "../playlist/playlist.scss";

const Playlist=({playlists})=>{

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

        playlists : rootReducer.playlists.playlists
     }

}
export default connect(mapStateToProps)(Playlist);