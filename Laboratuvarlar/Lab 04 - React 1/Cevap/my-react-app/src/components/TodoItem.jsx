const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : 'none',
      }}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
