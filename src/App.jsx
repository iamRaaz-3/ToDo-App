import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css"

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo></AddTodo>
      <div className="items-container"></div>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;

