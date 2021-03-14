import React ,{useState} from 'react'

function UseState_array() {
   const[num,setNum]= useState([])
   const addItem=()=>{
       setNum([...num,{id:num.length,value:Math.floor(Math.random()*10)+1}])
   }
    return (
        <div>
            <button onClick={addItem}> add a number</button>
            <ul>
                {
                    num.map(item=><li key={item.id}> {item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default UseState_array
