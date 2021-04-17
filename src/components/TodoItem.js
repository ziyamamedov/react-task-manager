import { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todoObj }) {
  const { removeTodo, onComplete } = useContext(Context); //Забираем переданную ф-ю из контекста

  return (
    <li className="todo-item">
      <div className="todo-item__col">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          onChange={onComplete.bind(null, todoObj.id)}
          checked={todoObj.completed}
        />
        <span className={`todo-item__text ${todoObj.completed ? "done" : ""}`}>
          {todoObj.text}
        </span>
      </div>
      <button
        className="btn_red btn"
        onClick={removeTodo.bind(null, todoObj.id)}
      >
        Delete
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todoObj: PropTypes.object,
};

export default TodoItem;
