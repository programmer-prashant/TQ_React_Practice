import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
case 'fetch_success':
    return {
        loading:false,post:action.payload,error:''
    }
    case 'fetch_failure':
        return {
            loading:false,post:{},error:"error while fetching the data"
        }
        default :
        return state
    }
}

function DataFetch_useReducer() {
    const[state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            dispatch({type:'fetch_success',payload:res.data})
        }).catch(error=>{
            dispatch({type:'fetch_error'})
        })
    })
    return (
        <div>
                  {state.loading?'loading':state.post.title}
      
                   {state.error?state.error:null}
        </div>
    )
}

export default DataFetch_useReducer

