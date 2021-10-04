

const tokenStartAsync= ()=>{

  return dispatch=>{
    const hash = window.location.hash;

    hash && console.log(hash);
    const token_temp= hash && hash.split("=")[1]; 
    const token_ = token_temp && (token_temp.split("&")[0]);

    token_ && dispatch(setToken(token_));
    //token_ && setToken(token_);
  
  }


}


const setToken = (token)=>{
  return {

    type: "LOGGED_IN",
    payload: token
  }

}

export default tokenStartAsync;