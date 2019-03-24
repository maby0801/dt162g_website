// Projektarbete
// DT162G JavaScript-baserad webbutveckling
// Mattias Bygdeson

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos.jsx";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: []
  };

  // GET: Generate task list
  componentDidMount(){
    console.log("Component App.js mounted");

    this.getTodo();
  }

  // GET: Fetch from database
  getTodo(){
    fetch("https://dt162g-webserver.herokuapp.com/api/tasks")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          todos: result
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  // POST: Add task
  addTodo = (title) => {
    const newTodo = {
      _id: uuid.v4(),
      title: title,
      completed: false
    }

    fetch("https://dt162g-webserver.herokuapp.com/api/tasks/add", {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
          'Content-Type': 'application/json'
      },
    })
    
    .then(data => console.log(data));

    this.setState({todos: [...this.state.todos, newTodo]});
  }

  // DELETE: Delete task
  delTodo = (id) => {
    fetch('https://dt162g-webserver.herokuapp.com/api/tasks/delete/' + id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: id})
    })
    .then(res => res.text())
    .then(res => alert(res))

    this.setState({ todos: [...this.state.todos.filter(todo => todo._id!== id)]});
  }

  // PUT: Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo._id === id) {
        todo.completed = !todo.completed

        fetch('https://dt162g-webserver.herokuapp.com/api/tasks/update/' + id, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            _id: todo._id,
            title: todo.title,
            completed: todo.completed
          })
        })
        .then(res => res.text())
        .then(res => alert(res))
      }
      return todo;
    })});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
