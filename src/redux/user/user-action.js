const setToken = (token)=>{
  return {

    type: "LOGGED_IN",
    payload: token
  }

}

export default setToken;