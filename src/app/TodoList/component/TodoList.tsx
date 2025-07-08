interface TodoListProps{
    todos:Todo[]
    deleteTodo:(id:number) => void,
    changeTodo:(id:number) => void
}

import TodoItem from "./TodoItem"

function TodoList({ todos , deleteTodo , changeTodo }:TodoListProps) {

    const list = todos.map(item => {
        return (<TodoItem key={item.id} todo={item} deleteTodo={deleteTodo} changeTodo={changeTodo}/>)
    })

    return(
        <ul>
            {list}
        </ul>
    )
}

export default TodoList;