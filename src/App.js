import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import List from './List';

const App = () => {
    const [todos, setTodos] = useState([
        { content: "洗濯する", id: nanoid() }   
    ]);

    const addTodo = (text) => {
          setTodos([...todos, { content: text, id: nanoid() }]);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo}/>
        </>
    )
};

export default App;