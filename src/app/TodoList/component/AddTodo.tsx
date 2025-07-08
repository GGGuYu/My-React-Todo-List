import { useState } from "react";

// AddTodo传入参数的类型
interface AddTodoProps{
    addTodo:(text:string) => void
}

//双向绑定
function AddTodo({ addTodo }:AddTodoProps) {

    const [text , setText] = useState('');

    //拿事件元素中的信息
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();//禁止掉原有事件逻辑,但是可以继承submit的触发方式
        let content = text
        setText('')
        if(content.trim() === '') return;
        console.log(content);
        addTodo(content);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button>添加</button>
            </form>
        </div>
    )
}

export default AddTodo;