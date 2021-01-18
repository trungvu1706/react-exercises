import React, { Component } from "react";

import TodoItem from "./TodoItem";
import CategoryTitle from "./CategoryTitle";
import "./style.css";

class TodoList extends Component {
  render() {
    const { todos, title, onClick, onDelete } = this.props;
    return (
      <div className="todo-list">
        <CategoryTitle>{title}</CategoryTitle>
        <ul className="list">
          <li>
            {todos.map((todo, index) => (
              <TodoItem
                todo={todo}
                key={index}
                onClick={onClick}
                onDelete={onDelete}
              />
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
