import "./App.css";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    console.log(todo);
    e.preventDefault();
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
    setTodo("");
  }
  return (
    <div className="App">
      <div className="container">
        <header>
          <Header />
          <form class="new-task" id="input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="text"
              placeholder="할일을 입력하세요"
              id="input"
              value={todo}
              onChange={handleChange}
            />
          </form>
        </header>
        <div id="result">
          <ul>
            {todos.map(todo => {
              return <li>{todo}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
