import React, { Component } from "react";

import "./style.css";

class AddItem extends Component {
  render() {
    return (
      <div className="add-item" onClick={this.props.onClick}>
        <button className="add-btn">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }
}

export default AddItem;
