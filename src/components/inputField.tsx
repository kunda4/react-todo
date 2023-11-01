import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handlerAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handlerAdd }: Props) => {
  return (
    <div>
      <form className="input" onSubmit={handlerAdd}>
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="input_box"
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
