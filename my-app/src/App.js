import React, { Component } from 'react';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems : todosData
    }
  }
  
  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState( state => {
      let {todoItems} = state;
      todoItems[index].completed = true;
      return todoItems;
    })
  };

  render() {
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTask = todoItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks, ...completedTask].map(item => {
      return (
        <ToDoItem
        key={item.id}
        decription={item.description}
        completed={item.completed}
        handleChange={() => {this.handleChange(item.id)}}
        />
      )
    })

    return (
      <div className="App">
        {finalTasks}
      </div>
    );
  }
}

export default App;
