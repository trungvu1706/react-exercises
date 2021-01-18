import React, { Component } from "react";

import "./style.css";

class CategoryTitle extends Component {
  render() {
    return <div className="category-title">{this.props.children}</div>;
  }
}

export default CategoryTitle;
