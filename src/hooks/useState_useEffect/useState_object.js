import React,{useState} from 'react'

function UseState_object() {
    const [name,setName]=useState({fn:'',ln:''})
    return (
        <div>
            <form>
                <input type="text" value={name.fn} onChange={e=>setName({...name,fn:e.target.value})}/>
                <input type="text" value={name.ln} onChange={e=>setName({...name,ln:e.target.value})}/>
            
            <h2> your first name is  {name.fn}</h2>
            <h2> your last name is  {name.ln}</h2>
            <h3> {JSON.stringify(name)}</h3>

            </form>
        </div>
    )
}

export default UseState_object
