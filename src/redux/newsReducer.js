
import { GET_DATA_FAILURE,GET_DATA_REQUEST,GET_DATA_SUCCESS } from "./newsAction"
  const initialState={
    data:[],
    error:'',
    loading:true
 }
 export const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA_REQUEST:
            return {
                ...state,
                loading:true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }   
        case GET_DATA_FAILURE:
            return {
                ...state,
                loading:false,
                data:[],
                error:action.payload
            } 
        default:
            return state        
    }
 }
 