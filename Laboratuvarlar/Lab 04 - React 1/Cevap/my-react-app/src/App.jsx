import TodoList from './components/TodoList'
import { useState } from 'react'
import './App.css'

const initialTodos = [
    { id: 1, text: 'Learn React', isCompleted: false },
    { id: 2, text: 'Build a To-Do App', isCompleted: false },
    { id: 3, text: 'Master JavaScript', isCompleted: false },
  ];


function App() {


  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (todoText) => {
    let newTodo = {
      id: Date.now(),
      text: todoText,
      isCompleted: false
    }
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (idToToggle) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === idToToggle) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }


  return (
    <>
      <form onSubmit={event => {
        event.preventDefault();
        addTodo(newTodoText);
        setNewTodoText('');
      }}>
        <input type="text" placeholder="Add a new todo" value={newTodoText} onChange={event => setNewTodoText(event.target.value)} />
        {/* <button type="submit">Add</button> */}
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App
