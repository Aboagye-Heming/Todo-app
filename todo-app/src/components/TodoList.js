import TodoItem from "./TodoItem"


const TodoList = ({todoList, setTodoList})=>{
    return (
        <div>{todoList.map((todoitem) => (
            <TodoItem setTodoList={setTodoList} key={todoitem.id} todoitem={todoitem} todoList={todoList} />
        ))}</div>
    )
}

export default TodoList