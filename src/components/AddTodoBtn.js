import { useContext } from "react";
import Context from "../context";

export default function AddTodoBtn() {
  const { onAddTodo, isAddTodoActive } = useContext(Context);

  return (
    <button
      onClick={onAddTodo}
      className={`btn ${isAddTodoActive ? "btn_red" : "btn_green"}`}
    >
      {isAddTodoActive ? "Close" : "Add"}
    </button>
  );
}
