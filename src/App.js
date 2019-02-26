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
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with wife",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  };

  componentDidMount(){
    console.log("Component App.js mounted");
  }

  // Toggle complete
  markComplete = (id) => {
    // Loopar igenom hela state-objektet
    // Om det finns en todo med det id som finns i argumentet, toggla completed-värdet
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // GET: Generate task list

  // POST: Add task
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  // DELETE: Delete task
  delTodo = (id) => {
    // Skapar ett nytt todos-objekt, men skriver bara ut todo-föremål som inte har id-numret i argumentet
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)]});
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
