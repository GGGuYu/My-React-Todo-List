"use client"
import { useState } from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import Tools from "./component/Tools";


function TodoListBox() {
    
    const [todos , setTodos] = useState<Todo[]>([])

    function add_Todo(text:string){
        console.log(text)

        
        const newTodo:Todo = {
            id : Date.now(),
            content : text , 
            completed:false
        }
        setTodos([
            ...todos,
            newTodo
        ])
        console.log(todos)
    }

    return (
        <div>
            <AddTodo addTodo={add_Todo}/>
            <TodoList/>
            <Tools/>
        </div>
    )
}

export default TodoListBox;