import {React, useState, useEffect} from "react";
import axios from  "axios";
import {Button,Typography} from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const UserSearch = (props)=>{

    const [loading, setLoading] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("metallica");


    useEffect(()=>{
         
        console.log(searchQuery);
        if(searchQuery.length>0){

        
        const getSearchResults=async ()=>{
        
            
            setLoading(true);
            
            console.log("get results");
     
            const {token} =props;
            const result = await axios({
     
                     method:"GET",
                     url: `https://api.spotify.com/v1/search?q=${searchQuery}&type=album,artist,playlist,track,show,episode`,
                     headers:{
                     'Authorization' : `Bearer ${token}`
                     }
            })
            
          setTimeout(async ()=>{
             setLoading(false);   
             setSearchList(result);
     
            },1000)
     
            
            
            console.log(result)
            
     
         }

         getSearchResults();
        }

    },[searchQuery]);


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    




    
    
        //const Item = this.item;
        return <div style={{backgroundImage: `${searchList.data && searchList.data.artists.items[0].images[0].url}`}}>
             <form>
                 <input type="text" id ="userSearch" placeholder="search album, artists..."></input>
                 
                 <LoadingButton
                        onClick={(e)=> {e.preventDefault(); setSearchQuery(document.querySelector("#userSearch").value)}}
                        loading={loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                  >
                    Fetch data
                </LoadingButton>
             </form>
     
             <Box >
                <Grid   container sx={{ overflow: "hidden", width:"50%", marginLeft: "25vw", border:"5px solid"}}spacing={1}  md={9} alignItems="center" justifyItems="center" justifyContent="center">
                    { [1,2,3,4,5,6,7,8,9].map((el,indx)=> {

                    
                    return  searchList.data && <Grid  item key={indx} md={4} columnSpacing={1} columnGap={1}  >
                        <Paper sx={{ overflow: "hidden"}}  elevation={20}><img style= {{width: "100%", height:"25vh",}} src={`${searchList.data.albums.items[indx].images[0].url}`}></img></Paper>
                        </Grid>
                    
                        
                    })

                    }

        

                </Grid>
             </Box>


             
        </div>
    
}

export default UserSearch;