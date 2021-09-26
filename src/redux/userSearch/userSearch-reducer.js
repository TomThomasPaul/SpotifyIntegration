const INITIAL_STATE = {

    loading : false,
    searchResult :[]
}


const SearchReducer = (state=INITIAL_STATE, action)=>{

   switch(action.type){
      
        case  "SET_SEARCH_ITEMS":
            return{
              loading : action.payload.loading,
              searchResult: action.payload.searchResult
              
          }

        default:
            return state

   }

}

export default SearchReducer;