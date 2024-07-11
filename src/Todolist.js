import React, {useState} from "react";

function Todolist() {
    const [todo, setTodo] = useState([
        {
            task: 'Take Out Trash',
            importance: 'Very Important',
            isDone: false
    },
    {
        task: 'Call Parents',
        importance: 'No Rush',
        isDone: false
}
])

    const [task, setTask] = useState()

    const [importance, setImportance] = useState('Choose An Option')
    
    const [isDone, setIsDone] = useState(false)

    function handleAdd() {
        if(importance === 'Choose An Option') {
            let newTodo = {
                task: task,
                importance: '',
                isDone: false
            };
            setTodo([...todo, newTodo])
        } else {
        let newTodo = {
            task: task,
            importance: importance
        };
        setTodo([...todo, newTodo])
        }
    }

    function handleTask(event) {
        setTask(event.target.value)
    }

    function handleImportance(event) {
        setImportance(event.target.value)
    }
    const doneStyle = {
        backgroundColor: 'Green'

    };
    const unDoneStyle = {
        backgroundColor: 'Red'
    }
    function doneTask() {
        if(setIsDone === false){
        setIsDone(true)} else {
        setIsDone(false)}
    }
    function removeTask(index) {
       setTodo(todo.filter((_, i) => i !== index))
    }
    return (
        <div>
            <input value={task} placeholder="Enter ToDo" onChange={handleTask}/>
            <select value={importance} onChange={handleImportance}>
                <option value='Choose an Option'>Choose An Option</option>
                <option value='Very Important'>Very Important</option>
                <option value='Do it Soon'>Do it Soon</option>
                <option value='No Rush'>No Rush</option>
            </select>
            <button onClick={handleAdd}>Add Task</button>
            <ul>
                {todo.map((t, i) => <li key={i} style= {t.isDone ? {doneStyle} : {unDoneStyle}} >{t.task} <b>{t.importance}</b>
                <button >Done</button>
                <button onClick={() => removeTask(i)}>Remove</button>
                </li>)}
            </ul>
        </div>
    )
}

export default Todolist