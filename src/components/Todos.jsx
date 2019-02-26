import React, { Component } from "react";
import TodoItem from "./TodoItem.jsx";
import PropTypes from 'prop-types';

class Todos extends Component {
  state = {};

  render() {
    // For-loop som skriver ut varje rad ur objektet "todos" (App.js, rad 7)
    // "this.props.todos" förkortas till bara "todo" innan loopen körs
    // För varje iteration renderar man en TodoItem-komponent
    // Tack vare att man skickar med objektet som en prop kan man använda datan i TodoItem.js

    // Climb the ladder: "this.props.markComplete" metoden finns i den här komponentens props (dvs App.js)
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
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
