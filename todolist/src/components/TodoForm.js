import React, { Component } from "react";

import "./style.css";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
    };
  }

  handleChangeValue = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  handleKeyUp = (e) => {
    // console.log(e.target.value);
    let value = e.target.value;

    if (e.key === "Enter" && value.trim().length > 5) {
      this.props.addItem(this.state.newTodo);
      this.setState({
        newTodo: "",
      });
    }
  };

  handleClickAdd = () => {
    let value = this.state.newTodo;

    if (value.trim().length > 5) {
      this.props.addItem(this.state.newTodo);
      this.setState({
        newTodo: "",
      });
    }

    console.log(value);
  };

  render() {
    return (
      <div className="todo-form">
        <input
          className="form-control"
          type="text"
          placeholder="type your list here!"
          value={this.state.newTodo}
          onChange={this.handleChangeValue}
          onKeyUp={this.handleKeyUp}
        />

        <button className="add-form-btn" onClick={this.handleClickAdd}>
          Add
        </button>

        {this.state.newTodo.trim().length <= 5 && (
          <div style={{ color: "red" }}>Vui long nhap 5 ky tu</div>
        )}
      </div>
    );
  }
}

export default TodoForm;
