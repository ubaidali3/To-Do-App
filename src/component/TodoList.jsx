import '../App.css'
import { useState } from "react"

function TodoList(){
    const [tasks,setTask]=useState([])
    let [newTask,setNewTAsk]=useState("")
    function handleInpuChange(event){
        setNewTAsk(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !==""){
            setTask(t=>[...t,newTask])
            setNewTAsk("")
        }

    } 
    function deleteTask(index){
        let updateTask=tasks.filter((element,i)=> i !==index)
        setTask(updateTask)
    }

  
    return (<>
    <div className="to-do-list">
        <h1 className="h1">TO Do List</h1>
        <div>
            <input type="text" placeholder="Enter a Task ......" value={newTask} onChange={handleInpuChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>

            </li>
        )}
        </ol>
    </div>

    </>)

}
export default TodoList