import React, { Component } from "react";
import { nanoid } from "nanoid";

import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import TodoForm from "./components/TodoForm";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: nanoid(), title: "phone my mom", isDone: false },
        { id: nanoid(), title: "Learning React", isDone: false },
        { id: nanoid(), title: "Go to Shopping", isDone: false },
        { id: nanoid(), title: "working out", isDone: false },
        { id: nanoid(), title: "go to sleep", isDone: false },
      ],
      showInput: false,
    };
  }

  handleClickItems = (id) => {
    const cloneTodos = this.state.todos;

    cloneTodos.map((todo) => {
      // console.log(todo);
      if (todo.id === id) {
        // console.log("check", todo.id);
        todo.isDone = !todo.isDone;
      }
    });
    this.setState({
      todos: cloneTodos,
    });
  };

  handleCreateItem = (title) => {
    const cloneTodos = this.state.todos;
    cloneTodos.push({
      // to push an object form
      id: nanoid(),
      title,
      isDone: false,
    });

    this.setState({
      todos: cloneTodos,
      showInput: false,
    });
  };

  handleRemoveItem = (id) => {
    const cloneTodos = this.state.todos;
    let index = cloneTodos.findIndex((todo) => todo.id === id); // remove element by finding index of element
    console.log(index);

    cloneTodos.splice(index, 1);

    this.setState({
      todos: cloneTodos, // change todos array after remove element
    });
  };

  render() {
    const completeTodos = this.state.todos.filter(
      (completeItem) => completeItem.isDone === true
    );
    // console.log(completeTodos);

    const incompleteTodos = this.state.todos.filter(
      (inCompleteItem) => inCompleteItem.isDone === false
    );
    // console.log(incompleteTodos);

    return (
      <div className="App">
        <div className="App-header">
          <i className="fas fa-bars"></i>
          <header>dailylist</header>
        </div>
        {/* condition to display UI */}
        {this.state.todos.length > 0 ? (
          <div>
            <TodoList
              todos={incompleteTodos}
              title={"upcoming"}
              onClick={this.handleClickItems}
              onDelete={this.handleRemoveItem}
            />
            <TodoList
              todos={completeTodos}
              title={"finished"}
              onClick={this.handleClickItems}
              onDelete={this.handleRemoveItem}
            />
          </div>
        ) : (
          <div className="empty-list">
            <img src="../img/empty.svg" alt="pic-1" width={400} height={400} />
            <p>Empty list</p>
          </div>
        )}

        {/* input value  */}
        {this.state.showInput && <TodoForm addItem={this.handleCreateItem} />}

        <AddItem onClick={() => this.setState({ showInput: true })} />
      </div>
    );
  }
}

export default App;
