import { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import { Todo } from "./model";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handlerAdd = (e: React.FormEvent) => {
    e.preventDefault();
  };
  if (todo) {
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  }
  console.log(todos);
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handlerAdd={handlerAdd} />
      </div>
    </>
  );
};

export default App;
