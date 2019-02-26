import React, { Component } from "react";
import PropTypes from 'prop-types';
import delIcon from '../img/recycling-bin.png';

class TodoItem extends Component {
  // "props" innehåller det nuvarande todo-föremålat som renderas
  getStyle = () => {
    if(this.props.todo.completed){
      return todoCompleteStyle;
    } else {
      return todoStyle;
    }
  }

  state = {};

  render() {
    // Hämtar ut data från this.props.todo, så dom lättare kan skrivas (exempel: rad 29 och 30);
    const { id, title } = this.props.todo;

    // Climb the ladder: "this.props.markComplete" metoden finns i den här komponentens props (dvs Todos.jsx)
    return (
      <div style={this.getStyle()}>
        <p style={{cursor: 'pointer'}} onClick={this.props.markComplete.bind(this, id)}>{title}</p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}></button>
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
