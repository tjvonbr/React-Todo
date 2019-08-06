import React from 'react';
import ToDoForm from './components/TodoComponents/ToDoForm';
import ToDoList from './components/TodoComponents/ToDoList';

import styles from './styles.css';
 
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: []
    };
  }

  toggleItem = id => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }
  
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    })
    console.log(this.state)
  }

  clearCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => !item.completed)
    })
    console.log(this.state);
  }
  
  
  render() {
    return (
      <div>
        <h1>TODO List:  MVP</h1>
        <ToDoForm addItem={this.addItem}
                  clearCompleted={this.clearCompleted}
         />
        <ToDoList toDoList={this.state.toDoList}       
                  toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
