import {takeEvery, put, call} from "redux-saga/effects";
import {setPlaylists} from "../playlists/playlist-action";
import axios from 'axios';

//worker
export function* asyncFetchPlaylists(action){

    const resPlaylists = yield call(async ()=>{

        return await axios({

               method:"GET",
               url: `https://api.spotify.com/v1/me/playlists`,
               headers:{
                'Authorization' : `Bearer ${action.payload}`
               }
            
            
            })
            
            
    })
    
    console.log("inside worker saga");
    console.log(resPlaylists);
    yield put(setPlaylists(resPlaylists.data.items));
}



//watcher
export function* watchFetchPlaylistSaga(){
yield takeEvery("FETCH_PLAYLISTS", asyncFetchPlaylists)
    
}
