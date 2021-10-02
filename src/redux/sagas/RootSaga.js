import {take, call, all} from "redux-saga/effects";
import {watchFetchPlaylistSaga} from "./PlaylistSaga";

function* RootSaga(){
  yield all([

    watchFetchPlaylistSaga()
  ]);
}

export default RootSaga;