import React from "react";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo.id} className="todoList_item">
            <span className={todo.status? 'complete': 'todoList_item_text'}>{todo.name}</span>
            <div>
              <button onClick={()=> completeTodo(todo.id)}  className="btn-complete">
                <i className="fa fa-check"></i>
              </button>

              <button onClick={()=> deleteTodo(todo.id)} className="btn-delete">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
