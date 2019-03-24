// Projektarbete
// DT162G JavaScript-baserad webbutveckling
// Mattias Bygdeson

import React, { Component } from "react";
import TodoItem from "./TodoItem.jsx";
import PropTypes from 'prop-types';

class Todos extends Component {
  state = {};

  render() {
    // Generate todo-list
    return this.props.todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;