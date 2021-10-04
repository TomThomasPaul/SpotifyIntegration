import logo from './logo.svg';
import axios from 'axios';

import React, { lazy, Suspense } from 'react';


import {Route} from 'react-router-dom';

import {connect} from "react-redux";
import tokenStartAsync from './redux/user/user-action';
import {fetchPlaylists} from './redux/playlists/playlist-action';

const UserSearch = lazy(()=>import('./components/search/search'));
const Login = lazy(()=>import('./components/login/loginComponent'))
const Homepage = lazy(()=>import('./components/homepage/homepage'));



class App extends React.Component{

   constructor(){
    super()

    console.log("constructor");
  }


 
  
 componentDidMount = async()=>{
   console.log("componentid mount");
  

   //implement redux thunk
   const {tokenStartAsync} = this.props;
   tokenStartAsync();
 


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
    const {token} = this.props;
    return <div>
              <Suspense fallback={<div>....loading</div>}>
              {
                !token && <Login></Login>
              }
              
              {token && <Route exact path='/'  render={()=><Homepage  ></Homepage>}></Route> }
              {token && <Route exact path = '/search' render ={()=><UserSearch ></UserSearch>} ></Route>}
              </Suspense>
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
         
        
        fetchPlaylists : token=>dispatch(fetchPlaylists(token)),
        tokenStartAsync: ()=>dispatch(tokenStartAsync())
       
      }
    }


export default connect(mapStateToProps,mapDispatchToProps)(App);
