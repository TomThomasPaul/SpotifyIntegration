import React from "react";
import axios from  "axios";
import {Button,Typography} from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


class UserSearch extends React.Component{

    constructor(){

        super();

        this.state = {
            loading :false,
            searchList: []
        }
        this.Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));
    }


    componentDidMount=async()=>{

        

       
    }


     getSearchResults=async (e)=>{
        
        await this.setState({...this.state,loading : true});
       e.preventDefault();
       console.log("get results");

       const {token} =this.props;
       const searchList = await axios({

                method:"GET",
                url: `https://api.spotify.com/v1/search?q=metallica&type=album,artist,playlist,track,show,episode`,
                headers:{
                'Authorization' : `Bearer ${token}`
                }
       })

       setTimeout(async ()=>{
        await this.setState({...this.state,loading : false, searchList: searchList});

       },1000)
       
       console.log(searchList)

    }

    render(){
        const Item = this.item;
        return <div>
             <form>
                 <input type="text" id ="userSearch" placeholder="search album, artists..."></input>
                 
                 <LoadingButton
                        onClick={this.getSearchResults}
                        loading={this.state.loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                  >
                    Fetch data
                </LoadingButton>
             </form>
     
             <Box >
                <Grid   container sx={{ overflow: "hidden", width:"50%", marginLeft: "25vw", border:"5px solid"}}spacing={1}  md={9} alignItems="center" justifyItems="center" justifyContent="center">
                    { [1,2,3,4,5,6,7,8,9].map((el,indx)=> {

                    
                    return  this.state.searchList.data && <Grid  item key={indx} md={4} columnSpacing={1} columnGap={1}  >
                        <Paper sx={{ overflow: "hidden"}}  elevation={20}><img style= {{width: "100%", height:"25vh",}} src={`${this.state.searchList.data.albums.items[indx].images[0].url}`}></img></Paper>
                        </Grid>
                    
                        
                    })

                    }

        

                </Grid>
             </Box>


             
        </div>
    }
}

export default UserSearch;