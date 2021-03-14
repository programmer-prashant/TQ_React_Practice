import React ,{useState, useEffect} from 'react'

function Hook_documnetTitle() {
    const[count,setCount]=useState(0)
    const [name , setName]=useState('')
    useEffect(()=>{
        console.log("useEffect updating the document title")
        document.title=`you clicked ${count} times `}
        ,[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}> clicked {count} times </button>
        </div>
    )
}

export default Hook_documnetTitle
