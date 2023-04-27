import styles from "../styles/style.module.css";
import shortid from "shortid";

const FormInput = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    console.log(todoList);
    setTodo("");
  };
  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input
        value={todo}
          placeholder="Add Todo Item"
          className={styles.todoinput}
          onChange={handleChange}
        ></input>
        <button type="submit" className={styles.todobutton}>
          Add
        </button>
      </form>
    </div>
  );
};

export default FormInput;
