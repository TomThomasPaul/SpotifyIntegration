import React from "react";
import Playlist from "../playlist/playlist";
import "../homepage/homepage.scss"


const homepage =()=>{

return <div className="home">
      
       
       
       {/* <div className="bg">
         <img className="bg-img"src="https://thorntreeslate.com/wp-content/uploads/2020/08/Sage_Green_Morse.jpg"></img>
         <div className="pl-label">
            <h4>P</h4>
            <h4>L</h4>
            <h4>A</h4>
            <h4>Y</h4>
            <h4>L</h4>
            <h4>I</h4>
            <h4>S</h4>
            <h4>T</h4>
            <h4>S</h4>

         </div>
        
       </div>
       */}

        <div className="pl-label">    
            <h4>P</h4>
            <h4>L</h4>
            <h4>A</h4>
            <h4>Y</h4>
            <h4>L</h4>
            <h4>I</h4>
            <h4>S</h4>
            <h4>T</h4>
            <h4>S</h4>

         </div> 
       <div className="pl">
       
             

                     
                <Playlist ></Playlist>
              
              
            
               
              
    

       </div>
      
           
</div>

}

export default homepage;