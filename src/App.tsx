import { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import TodoList from "./components/todoList";
import { Todo } from "./model";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handlerAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <>
      <div className="App">
        <span className="heading">To do App</span>
        <InputField todo={todo} setTodo={setTodo} handlerAdd={handlerAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
