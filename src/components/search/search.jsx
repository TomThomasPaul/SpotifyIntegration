import React from "react";
import axios from  "axios";
import {Button,Typography} from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
//import "../search/search.scss";
import {UserSearchFlex,UserSearchForm, AlbumFlex, AlbumItem, AlbumImage} from "../search/search.styles";
import {connect} from "react-redux"
import setSearchItems from "../../redux/userSearch/userSearch-action";


const UserSearch =(props)=>{

//     constructor(props){

//         super(props);

//         // this.state = {
//         //     loading :false,
//         //     searchResult: []
//         // }
//     //     this.Item = styled(Paper)(({ theme }) => ({
//     //         ...theme.typography.body2,
//     //         padding: theme.spacing(1),
//     //         textAlign: 'center',
//     //         color: theme.palette.text.secondary,
//     //       }));
//     // 
// }

  const {loading,searchResult,token,setSearchItems} = props;

    const getSearchResults=async (e)=>{
        
       setSearchItems({...props,loading : true});
       e.preventDefault();
       console.log("get results");
       let searchQuery = document.querySelector("#userSearch").value;
       console.log(searchQuery);
       searchQuery= searchQuery || "metallica";

       //const token =props.token;
       const searchList = await axios({

                method:"GET",
                url: `https://api.spotify.com/v1/search?q=${searchQuery}&type=album,artist,playlist,track,show,episode`,
                headers:{
                'Authorization' : `Bearer ${token}`
                }
       })

       setTimeout(async ()=>{
        setSearchItems({loading : false, searchResult: searchList});

       },1000)
       
       console.log(searchList)

    }

    
        //const Item = this.item;
        return <UserSearchFlex>
            <UserSearchForm>
            <form>
                 <input type="text" id ="userSearch" placeholder="search album, artists..."></input>
                 
                 <LoadingButton
                        onClick={getSearchResults}
                        loading={loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                  >
                    Fetch data
                </LoadingButton>
             </form>
            </UserSearchForm>
       
     
             <AlbumFlex>
                
                    { [1,2,3,4,5,6,7,8,9].map((el,indx)=> {

                    
                    return  searchResult.data && <AlbumItem>
                        <AlbumImage src={`${searchResult.data.albums.items[indx].images[0].url}`}></AlbumImage>
                        </AlbumItem>
                    
                        
                    })

                    }

        

                
             </AlbumFlex>


             
        </UserSearchFlex>
    
}

const mapStateToProps =(rootReducer)=>{

    return {

        loading : rootReducer.search.loading,
        searchResult : rootReducer.search.searchResult,
        token : rootReducer.token.userToken
    }

}

const mapDispatchToProps =(dispatch)=>{

    return {
       setSearchItems : (searchItems)=>dispatch(setSearchItems(searchItems))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);