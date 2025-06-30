import { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {setInputValue(e.target.value)};

  return (
    <div class>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="What to do?"
        />
        <button type="submit">Add To Do</button>
      </form>

      <ul>
        {todo.map((todo, idx) => (
            <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
