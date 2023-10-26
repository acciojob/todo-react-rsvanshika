
import React,{useState} from "react";
import './../styles/App.css';
// import { defaultsDeep } from "cypress/types/lodash";

const App = () => {

  const [todo,setTodo]=useState("")
  const [todolist,setTodoList]=useState([])

  function implementAddTodo(e){
    e.preventDefault();
    setTodoList([...todolist,todo])
    setTodo(" ");

  }

  function handleDelete(i){
    setTodoList(todolist.filter((value,index)=>index!==i))

  }

  return (
    <div>
      <form onSubmit={implementAddTodo}>
      <input type="text" placeholder="Enter task"
      onChange={(e)=>setTodo(e.target.value)} value={todo}/>
      <button type="submit">Add Todo</button>
      </form>

    { 
     todolist.map((item,index) =>(
        <div>
            <ul>
              <li>
              {item}
              <button onClick={()=>handleDelete(index)} >Delete</button>
              </li>
            </ul>
             
            
          
        </div>
      ))
    }
    

  
      
      
    </div>
  )
}

export default App
