import { useState } from 'react';
import Navbar from '../../todo/Todo';
import { v4 as uuidv4 } from 'uuid';

function APP() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleEdit = () => {
       
    }

    const handleDelete = () => {
      
    }

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
        setTodo("");
    }

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <>
            <Navbar />
            <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh] md:w-[35%]">
                <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
                <div className="addTodo my-5 flex flex-col gap-4">
                    <h2 className='text-2xl font-bold'>Add a Todo</h2>
                    <div className="flex">
                        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
                        <button onClick={handleAdd} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>Save</button>
                    </div>
                </div>

                <h2 className='text-2xl font-bold'>Your Todos</h2>
                <div className="todos">
                    {todos.map(item => {
                       return <div key={item.id} className="todo flex">
                            <div className={item.isCompleted?"":"line-through"}>{item.todo}</div>
                            <div className="buttons">
                                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                                <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
                            </div>
                        </div>
})}
                </div>
            </div>
        </>
    );
}

export default APP;
