import React, { Component } from 'react'
import axios from 'axios'

class Data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             emp:[],
             errormsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/post').then(response=>{
// console.log(response)
this.setState({
    emp:response.data
})
        }).catch(error=>{
            // console.log(error)
            this.setState({
                errormsg:'error while fetching the data'
            })

        })
    }
    render() {
        const {emp,errormsg}=this.state
        return (
            <div>
                <h3> list of Items</h3>
                {
                    emp.length?emp.map(e=>{
                        return <div key={e.id}> {e.id} {e.title}</div>
                    }):null
                }
                {errormsg?<div>{errormsg} </div>:null}
            </div>
        )
    }
}

export default Data
