import axios from "axios";
import { useState } from "react";

function Taskupdate(props) {
    const [update,setupdate]=useState({
        title:""
        
    })
    const handalchang=(e)=>{
        setupdate({
            ...update,
            [e.target.name]:e.target.value
        })
        console.log(update);
    }
    const handalsubmit=()=>{
        axios.put(`http://localhost:5000/notes/${props.id}`,update)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return ( 
        <div >
            <h4>TaskUpdate</h4>
            <div className="Addlist">
            <div ><input type={"text"} name="title"  value={update.title}placeholder="Task" className="inputtask" onChange={handalchang} /></div><br/>
            
            <div ><button className="btntask" onClick={handalsubmit}>ADD</button></div>
            </div>
        </div>
     )
}

export default Taskupdate;