import axios from 'axios';
import { useState } from 'react';
import './Task.css'
function TaskAdd() {
    const [add,setadd]=useState({
        title:"",
    })
    const handalchang=(e)=>{
        setadd({
            ...add,
            [e.target.name]:e.target.value,
        })
        console.log(add);
    }
    const handalsubmit=()=>{
        console.log("before post fire")
        
        axios.post("http://localhost:5000/notes", add)
        .then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
        console.log("after post fire before windows reload")
        window.location.reload()
        console.log("after post fire after windows reload")
       
    }
    return ( 
        <div >
            <h4>TaskAdd</h4>
            <div className="Addlist">
            <div ><input type={"text"} name="title"  value={add.title}placeholder="Task" className="inputtask" onChange={handalchang} /></div><br/>
            <div ><button className="btntask" onClick={handalsubmit}>ADD</button></div>
            </div>
        </div>
     );
}

export default TaskAdd;