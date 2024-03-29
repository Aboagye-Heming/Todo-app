import { useState } from "react";
import FormInput from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <FormInput
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList setTodoList={setTodoList} todoList={todoList}/>
    </div>
  );
}

export default App;
