import { useContext } from "react";
import Context from "../context";

function AddTodoForm() {
  const { onSubmitTodo } = useContext(Context);

  return (
    <form className="add-todo__form" onSubmit={onSubmitTodo}>
      <h4 className="add-todo-form-title">Add task</h4>
      <div className="add-todo-form-row">
        <input type="text" name="addTodoInput" className="add-todo__input" />
        <button type="submit" className="btn btn_green">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
