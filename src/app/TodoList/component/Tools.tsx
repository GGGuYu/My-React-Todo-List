interface ToolsProps{
    changeSelected:(select:string) => void
}


function Tools({ changeSelected }:ToolsProps) {
    

    return (
        <div>
            <button onClick={() => {changeSelected('all')}}>all</button>
            <button onClick={() => {changeSelected('completed')}}>completed</button>
            <button onClick={() => {changeSelected('active')}}>active</button>
        </div>
    )
}

export default Tools;