const INITIAL_STATE ={

    playlists : []
}


const PlaylistReducer = (state=INITIAL_STATE, action)=>{

switch(action.type){

    case "SET_PLAYLISTS" : return{

        ...state,
        playlists : action.payload
    }
            

    default:
        return state;
}

}

export default PlaylistReducer;