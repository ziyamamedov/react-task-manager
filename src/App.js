import { useState } from "react";
import TodoList from "./components/TodoList";
import Context from "./context";
import AddTodoBtn from "./components/AddTodoBtn";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, text: "Купить хлеб" },
    { id: 2, completed: false, text: "Купить масло" },
    { id: 3, completed: false, text: "Поменять колеса" },
    { id: 4, completed: false, text: "Сделать дело" },
  ]);

  let todosQuan = todos.length;

  let [isAddTodoActive, setAddTodo] = useState(false);

  //This function will launch when the checkbox changed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Delete todo from the ui
  const deleteComponent = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Opens and closes Add-Todo Form
  const toggleAddTodo = () => setAddTodo(() => !isAddTodoActive);

  //Adds new todo to the list
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: ++todosQuan, completed: false, text: e.target.addTodoInput.value },
    ]);
    toggleAddTodo();
  };

  return (
    /** Оборачиваем наш компонент в Context.Provider для использования контекста,
     * это нужно для того чтобы вызывать нужную ф-ю прямо из компонента, а не передавать
     * ее через props*/
    <Context.Provider
      value={{
        removeTodo: deleteComponent,
        onComplete: toggleComplete,
        onAddTodo: toggleAddTodo,
        isAddTodoActive,
        onSubmitTodo: addTodo,
      }}
    >
      <div className="App">
        <div className="wrapper">
          <div className="container">
            <div className="todos__header">
              <h2 className="todos-title">Tasks</h2>
              <AddTodoBtn />
            </div>
            {isAddTodoActive && <AddTodoForm />}
            {todos.length === 0 ? (
              <h3>No todos</h3>
            ) : (
              <TodoList todosArr={todos} />
            )}
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
