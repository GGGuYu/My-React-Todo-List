"use client"
import { useState } from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import Tools from "./component/Tools";


function TodoListBox() {
    
    const [todos , setTodos] = useState<Todo[]>([])
    const [selected , setSelected] = useState('')

    function add_todo(text:string){
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

    function delete_todo(id:number){
        setTodos(todos.filter(item => item.id !== id))
    }

    function change_todo(id:number){
        const newTodos:Todo[] = JSON.parse(JSON.stringify(todos));
        setTodos(newTodos.map(todo => {
            if(todo.id === id){
                const newTodo:Todo = {
                    id:todo.id,
                    content: todo.content,
                    completed:!(todo.completed)
                }
                return newTodo
            }
            return todo
        }))
    }
    
    
    function filter_todos(){
        switch(selected){
            case 'all':
                return todos;
            case 'completed':
                return todos.filter(item => item.completed);
            case 'active' :
                return todos.filter(item => !item.completed);
            default:
                return todos;
        }
    }

    return (
        <div>
            <AddTodo addTodo={add_todo}/>
            <TodoList todos={filter_todos()} deleteTodo={delete_todo} changeTodo={change_todo}/>
            <Tools changeSelected={setSelected}/>
        </div>
    )
}



export default TodoListBox;