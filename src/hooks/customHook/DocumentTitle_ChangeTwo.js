import React ,{useState}from 'react'
import useDocumnetTitle from './useDocumentTitle'

function DocumentTitle_ChangeTwo() {
    const[count,setCount]=useState(0)

  useDocumnetTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> count-{count}</button>
        </div>
    )
}

export default DocumentTitle_ChangeTwo
