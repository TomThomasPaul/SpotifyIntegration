import React from "react";
import axios from  "axios";


class UserSearch extends React.Component{




    componentDidMount=async()=>{

        const {token} =this.props;
       const searchList = await axios({

                method:"GET",
                url: `https://api.spotify.com/v1/search?q=metallica&type=album`,
                headers:{
                'Authorization' : `Bearer ${token}`
                }
       })

       console.log(searchList)
    }


    render(){

        return <div>

        </div>
    }
}

export default UserSearch;