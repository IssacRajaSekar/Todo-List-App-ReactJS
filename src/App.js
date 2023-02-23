import React,{useState} from 'react';
import './App.css';

const App = () => {
    const [Todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([])
    const [editId, seteditId] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(editId)
        if(editId){
            const updateEditTodos = Todos.map((t)=>
                t.id === editId ? (t = {id:t.id,Todo}) : {id:t.id,Todo:t.Todo}
            );
            setTodos(updateEditTodos)
            seteditId(0);
            setTodo("");
            return;
        }

        if (Todo !== ""){
            setTodos([{id:`${Todo}-${Date.now()}`,Todo},...Todos])
            setTodo("");
        }
    }

    const handleDelete = (id) => {
        const delTodo = Todos.filter((to)=>to.id !== id);
        setTodos([...delTodo])
    };

    const handleEdit = (id) => {
        const editTodo = Todos.find((i)=>i.id===id)
        setTodo(editTodo.Todo)
        seteditId(id)
    }

  return (
    <div className='App'>
        <div className='container'>
           <h1>TODO APP</h1>
            <form className='todoForm' onSubmit={handleSubmit}>
                <input type="text" value={Todo} onChange={(e) => setTodo(e.target.value)}/>
                <button type='submit'>{editId ? "Edit" : "Go"}</button>
            </form>
            <ul className='allTodos'>
                {Todos.map((t) => (
                    <li className='singleTodo'>
                        <span className='todoText' key={t.id}>
                            {t.Todo}
                        </span>
                        <button onClick={() => handleEdit(t.id)}>Edit</button>
                        <button onClick={() => handleDelete(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default App