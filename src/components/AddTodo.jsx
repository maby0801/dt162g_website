// Projektarbete
// DT162G JavaScript-baserad webbutveckling
// Mattias Bygdeson

import React, { Component } from 'react';
import PropTypes from "prop-types";

class AddTodo extends Component {
    state = { 
        title: ""
    }

    // Update state with text body from input field
    onChange = (e) => {
        this.setState({title: e.target.value});
    }

    // Run addTodo function in App.js
    // Reset state
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }

    render() { 
        return ( 
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input 
                    style={{flex: "10", padding: "5px"}} 
                    type="text" 
                    name="title" 
                    placeholder="Add task..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Add" 
                    className="btn" 
                    style={{flex: "1"}}
                />
            </form>
         );
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}
 
export default AddTodo;