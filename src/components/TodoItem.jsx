// Projektarbete
// DT162G JavaScript-baserad webbutveckling
// Mattias Bygdeson

import React, { Component } from "react";
import PropTypes from 'prop-types';
import delIcon from '../img/recycling-bin.png';

class TodoItem extends Component {
  getStyle = () => {
    if(this.props.todo.completed){
      return todoCompleteStyle;
    } else {
      return todoStyle;
    }
  }

  state = {};

  render() {
    const { _id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p style={{cursor: 'pointer'}} onClick={this.props.markComplete.bind(this, _id)}>{title}</p>
        <button onClick={this.props.delTodo.bind(this, _id)} style={btnStyle}></button>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

// CSS
const btnStyle = {
  width: "20px",
  height: "20px",
  float: "right",
  border: "none",
  fontSize: "12px",
  cursor: "pointer",
  backgroundImage: "url(" + delIcon + ")",
  backgroundSize: "18px",
  backgroundRepeat: "no-repeat",

  position: "relative",
  top: "-20px"
}

const todoStyle = {
  background: "#ddd",
  padding: "10px",
  borderBottom: "1px #aaa dotted",
  textDecoration: "none"  
}

const todoCompleteStyle = {
  background: "#ddd",
  padding: "10px",
  borderBottom: "1px #aaa dotted",
  textDecoration: "line-through",
  color: "#aaa"
}

export default TodoItem;
