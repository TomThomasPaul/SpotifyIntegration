const INITIAL_STATE ={

    userToken : null
}


const UserReducer = (state=INITIAL_STATE, action)=>{

switch(action.type){

    case "LOGGED_IN" : return{

        ...state,
        userToken : action.payload
    }
            

    default:
        return state;
}

}

export default UserReducer;