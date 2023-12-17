import { selector } from "recoil";
import { todoState } from "../atom/todos";

function getLocaLStorage():[]{
   const data = localStorage.getItem("todosData");
   if(data) return  JSON.parse(data);
   else return [];
}

export const userTodo = selector({
   key:"userTodo",
   get: ({get})=>{
      const data = getLocaLStorage();
        const state = get(todoState);

        if(data !==null) return data;
        else return  state.todos;
   }
})