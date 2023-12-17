import { useState } from "react"
import { todoState } from "./store/atom/todos"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userTodo } from "./store/slectors/todo";

const InputComp = () => {

    const [task,setTask] = useState("");
    const seTodo = useSetRecoilState(todoState);
    const todoValues = useRecoilValue(userTodo);

    function setValues(){
     
      if(task !== ""){
        let currData = [...todoValues,{
          id:Math.random().toString(),
          task:task,
          completed:false,
      }];

      localStorage.setItem("todosData",JSON.stringify(currData));
      seTodo({
          isLoading: false,
          todos: currData
        })
        setTask("")
      }
      
          
    }

  return (
    <div className="inputSection">
      <input type="text"className="todo-input" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
      <button  onClick={setValues}>Add</button>
    </div>
  )
}

export default InputComp
