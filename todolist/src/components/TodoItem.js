import React, { Component } from "react";

import "./style.css";

class TodoItem extends Component {
  render() {
    const { todo, onClick, onDelete } = this.props;
    return (
      <div className="todo-item" onClick={() => onClick(todo.id)}>
        <span>{todo.title}</span>

        <button className="removed-btn" onClick={() => onDelete(todo.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default TodoItem;
