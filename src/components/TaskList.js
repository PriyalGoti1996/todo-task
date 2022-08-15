import './Task.css'
import axios from "axios";
import { useEffect, useState } from "react";
import Taskupdate from './Taskupdate';
import TaskAdd from './TaskAdd';
import 'font-awesome/css/font-awesome.min.css';


function TaskList() {
    const [detalis, setdetalis] = useState([])
    const [display, setdisplay] = useState(false)
    const [id, setid] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/notes")
            .then((response) => {
                setdetalis(response.data)
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    //Delete button//
    const handaldelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/notes/${id}`)
            .then((response) => {
                console.log(response);
                console.log("then");
            }).catch((error) => {
                console.log(error);
            })
        console.log("delete");
    }
    //update button
    const handalupdate = (id) => {
        setdisplay(true)
        setid(id)

    }
    //checkbox//
    let chek = []
    const handalcheck = (id) => {
        chek.push(id)
    }
    const handalselect = () => {
        chek.map((value) => {
            axios.delete(`http://localhost:5000/notes/${value}`)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        })
    }

    const handalall = () => {
        axios.delete(`http://localhost:5000/notes/`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            {
                display === true ? <Taskupdate id={id}></Taskupdate> : <TaskAdd></TaskAdd>
            }

            <div className='btn'>
                <h4 className='listhading'>Task</h4>
                {
                    detalis.map((value) => {
                        return (
                            <div className='maindiv'>

                                <p key={value._id}></p>

                                <p className='rowlist'>{value.title}
                                    <div className='icon'>
                                        <input className='inericon' id='first' type={"checkbox"} onChange={() => handalcheck(value._id)} />
                                        <div className='inericon' id="second"><i class="fa fa-pencil-square-o" aria-hidden="true" onClick={() => handalupdate(value._id)}></i></div>

                                        <div className='inericon' id="thred"><i class="fa fa-minus-square-o" aria-hidden="true" onClick={() => handaldelete(value._id)}></i></div>
                                    </div>
                                </p>



                            </div>

                        )
                    })
                }
                <button className="deletebtn" onClick={handalselect}>Delete Selected</button>
                <button className="deletebtn" onClick={handalall}>Delete All</button>
            </div>
        </>
    );
}

export default TaskList;