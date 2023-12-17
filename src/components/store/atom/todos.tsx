import { atom } from "recoil";

interface Tasks{
    id:string,
    task:string,
    completed:boolean,
}
interface TodoState{
    isLoading:boolean,
    todos:Tasks[]
}

export const todoState =  atom<TodoState>({
    key:"todoState",
    default:{
        isLoading: true,
        todos: []
    }
})