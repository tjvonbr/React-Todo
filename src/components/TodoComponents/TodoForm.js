import React from 'react';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '' 
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      name: ''
    })
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input 
          placeholder='Please enter your task!'
          type='text'
          value={this.item}
          name='item'
          onChange={this.handleChanges}
        />
        <button onClick={this.submitItem}>Add Task</button>
        <button type='button'
                className='clear-btn'
                onClick={this.props.clearCompleted}>
                  Clear Completed Items
        </button>
      </form>
    );
  }
}

export default ToDoForm;