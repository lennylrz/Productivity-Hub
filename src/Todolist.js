import React, {useState} from "react";
import styles from './Todolist.css'
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

    const [task, setTask] = useState('')

    const [importance, setImportance] = useState('Choose An Option')
    
    const [isDone, setIsDone] = useState(false)

    function handleAdd() {
        if (task === '') {
            alert('Enter a Task you Donut!')
        }
        else if(importance === 'Choose An Option') {
            let newTodo = {
                task: task,
                importance: '',
                isDone: false
            };
            setTodo([...todo, newTodo])
            setTask('')
        } else {
        let newTodo = {
            task: task,
            importance: importance
        };
        setTodo([...todo, newTodo])
        setTask('')
        setImportance('Choose An Option')
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
    function removeTask(index) {
       setTodo(todo.filter((_, i) => i !== index))
    }
    return (
        <div className="todo-list">
            <input value={task} placeholder="Enter ToDo" onChange={handleTask} className="input"/>
            <select value={importance} onChange={handleImportance} className="select">
                <option value='Choose an Option'>Choose An Option</option>
                <option value='Very Important'>Very Important</option>
                <option value='Do it Soon'>Do it Soon</option>
                <option value='No Rush'>No Rush</option>
            </select>
            <button onClick={handleAdd} className="add-button">Add Task</button>
            <ul className="list">
                {todo.map((t, i) => <li key={i} className="todo-task">{t.task} <b className="importance">{t.importance}</b>
                <button onClick={() => removeTask(i)} className="remove-button">Remove</button>
                </li>)}
            </ul>
        </div>
    )
}

export default Todolist