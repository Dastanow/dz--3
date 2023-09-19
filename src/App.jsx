import { useState } from "react";  
import "./App.css";  
  
function App() {  
  const [state, setState] = useState("");  
  const [tasks, setTasks] = useState([]);  
  
  const onAddTask = (e) => {  
    const date = new Date(); 
    e.preventDefault();  
    setTasks([  
      ...tasks,  
      {  
        id: date.getMilliseconds(), 
        value: state,  
      },  
    ]);  
    console.log(tasks); 
    setState("");  
  };  
  const onDelitTask = (id) => { 
const filterTasc = tasks.filter((el, ) => el.id !== id) 
setTasks(filterTasc); 
  } 
  return (  
    <div>  
      <div>  
        <form onSubmit={onAddTask}>  
          <input  
            value={state}  
            onChange={(event) => setState(event.target.value)}  
            type="text"  
            placeholder="type something..."  
          />  
          <button onClick={onAddTask}>Add</button>  
        </form>  
      </div>  
  
      <div>  
        <ul>  
          {tasks.map((item, i) => (  
            <li style={{listStyle: "none" }} key={i}>  
              <input placeholder={item.value}/> 
              <button onClick={() => onDelitTask(item.id)}>delete</button> 
              <button>edit</button>
            
            </li>  
          ))}  
        </ul>  
      </div>  
    </div>  
  );  
}  
  
export default App;
