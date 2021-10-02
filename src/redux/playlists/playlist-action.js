
export const fetchPlaylists = (token)=>{

   return {
       type: "FETCH_PLAYLISTS",
       payload: token
   }

}

export const setPlaylists = (playlists)=>{

return {

    type : "SET_PLAYLISTS",
    payload: playlists
}

}

