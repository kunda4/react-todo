import { Todo } from "../model";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form action="" key={todo.id}>
      <span>{todo.todo}</span>

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
