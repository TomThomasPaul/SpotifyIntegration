import { combineReducers } from "redux";

import PlaylistReducer from "./playlists/playlists-reducer";
import UserReducer from "./user/user-reducer";
import SearchReducer from "./userSearch/userSearch-reducer";

export default combineReducers({

    playlists : PlaylistReducer,
    token :   UserReducer,
    search : SearchReducer
})