import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import householdData from './utils/householdData';
import Household from './pages/Household';
import HomeScreen from './pages/HomeScreen';
import LogOut from './pages/LogOut';
import Navbar from './components/Navbar';
import Todos from './Todos';
import AddTodo from './AddTodo'

// import Account from './pages/Account';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="grid-container">

          <Route path="/" exact={true} component={HomeScreen}></Route>
          <Route path="/household/:id" component={Household}></Route>
          <Route path='/logout/' component={LogOut}></Route>

        </div>
      </div>
    </Router>
  );
}


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'vacum floor' }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />

      </div>
    )
  }
}

export default AppTodo;
