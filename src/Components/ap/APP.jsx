import { useState, useEffect } from 'react';
import Navbar from '../../todo/Todo';
import { v4 as uuidv4 } from 'uuid';

function APP() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        let todoString = localStorage.getItem("todos")
        if (todoString) {
            let todos = JSON.parse(todoString)
            setTodos(todos)
        }
    }, [])


    const savetolc = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id)
        setTodo(t[0].todo)
        let newTodos = todos.filter(item => {
            return item.id !== id
        })
        setTodos(newTodos)
        savetolc()
    }


    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item => {
            return item.id !== id
        })

        setTodos(newTodos)
        savetolc()
    }

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
        setTodo("");
        savetolc()
    }

    const handleChange = (e) => {
        setTodo(e.target.value);
        savetolc()
    }
    const handlecheckbox = (e) => {
        let id = e.target.name
        let index = todos.findIndex(item => {
            return item.id === id
        })
        let newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
        savetolc()
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh] ">

                <div className="addTodo my-5 flex flex-col gap-4">
                    <h2 className='text-2xl font-bold'>Add a Todo</h2>
                    <div className="flex">
                        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
                        <button onClick={handleAdd} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>Save</button>
                    </div>
                </div>

                <h2 className='text-2xl font-bold'>Your Todos</h2>
                <div className="todos">
                    {todos.length === 0 && <div>no todos to display</div>}
                    {todos.map(item => {
                        return <div key={item.id} className="todo flex">
                            <input onChange={handlecheckbox} type="checkbox" value={todo.isCompleted} name={item.id} id="" />
                            <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                            <div className="buttons">
                                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default APP;
