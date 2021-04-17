import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todosArr }) {
  return (
    <ul className="todo-list">
      {todosArr.map((todo, index) => {
        return <TodoItem key={index} todoObj={todo} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todosArr: PropTypes.arrayOf(PropTypes.object),
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoList;
