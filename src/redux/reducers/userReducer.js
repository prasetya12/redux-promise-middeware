

const initialState={
    result:[],
    data:{},
    isLoading:false,
    isError: false
}

function userReducer(state=initialState,action){

    

    switch(action.type){

        //without promise middleware
        case "GET_TITTLE":
            return{
                ...state,data:action.payload
            }



            //with promise middleware
        // case "GET_TITTLE_PENDING":
        //     return {
        //         ...state,isLoading:true
        //     }
        // case "GET_TITTLE_FULFILLED":
        //     return{
        //         ...state,isLoading:false,data:action.payload.data
        //     }
        // case "GET_TITTLE_REJECTED":
        //     return{
        //         ...state,isLoading:false,isError:true
        //     }
        default:
            return state
    }

}


export default userReducer