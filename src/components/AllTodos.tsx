import { useRecoilValue, useSetRecoilState } from "recoil"
import { userTodo } from "./store/slectors/todo"
import { todoState } from "./store/atom/todos";
import { useSearchParams } from "react-router-dom";



const AllTodos = () => {



    const [searchParams] = useSearchParams();
    
    let todosData = searchParams.get("todos");

    // console.log(todosData,'hello world')

    const Todos =  useRecoilValue(userTodo);
    const SetTodos  = useSetRecoilState(todoState);
   
    let filterData = Todos;


    if(todosData === 'active'){
        filterData = filterData.filter((task) => !task.completed)
        localStorage.setItem("todosData",JSON.stringify(filterData));
    }
    if(todosData === 'completed'){
        filterData = filterData.filter((task) => task.completed)
        localStorage.setItem("todosData",JSON.stringify(filterData));
    }

    function changeComp(index:string){
    
    

        //   const completedTask = 

        let newArr=[...Todos];

          for(let i  = 0;  i<newArr.length; i++){
            if(newArr[i].id  === index){
                newArr[i] = {
                    id: index,
                    task: newArr[i].task,
                    completed: !newArr[i].completed
                }
            }
          }
        

     localStorage.setItem("todosData",JSON.stringify(newArr));
       SetTodos({
        isLoading: false,
        todos: newArr
       });
    }


    function delteTodo(index:number){
      let newArr = [];

      for(let i = 0; i<Todos.length;i++){
            if(i !== index) newArr.push(filterData[i]);
      }

      localStorage.setItem("todosData",JSON.stringify(newArr));
      SetTodos({
        isLoading: false,
        todos: newArr
       });
    }
  return (
    <ul className="main-task">
      {filterData.map((todo,index)=>{
        return <li>
             <input type="checkbox" id={`todo-${index}`} checked={todo.completed}  onChange={()=>changeComp(todo.id)}/>
             <label htmlFor={`${index}`}>{todo.task}</label>
              
              {
                todo.completed && (
                   <button type="button" id={`${todo.id}`} onClick={()=>{delteTodo(Number(index))}}>Delete</button>
                )
              }
        </li>
    })}
    </ul>
  )
}



export default AllTodos
