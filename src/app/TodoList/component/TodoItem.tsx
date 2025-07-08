interface TodoItemProps{
    todo:Todo,
    deleteTodo:(id:number) => void,
    changeTodo:(id:number) => void,
}

function TodoItem({ todo , deleteTodo , changeTodo }:TodoItemProps) {

    let show = { textDecoration: todo.completed ? 'line-through' : 'none' }

    const itemStyle = {
        display:'flex',
        alignItems:'center',
        textDecoration: 'none'
    }

    if(todo.completed) itemStyle.textDecoration= 'line-through';
    else itemStyle.textDecoration = 'none';

    function handleDelete() {
        deleteTodo(todo.id);
    }
    function handleChange(){
        changeTodo(todo.id);
    }


    return (
        <li style={itemStyle}>
            <span>{todo.content}</span>
            <button onClick={handleChange}>切换</button>
            <button onClick={handleDelete}>删除</button>
        </li>
    )
}


export default TodoItem;