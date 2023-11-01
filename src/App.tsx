import { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
};

export default App;
