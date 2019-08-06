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
    this.setState({ item: '' })
  };

  render() {
    return (
      <form className='toDo-form'
            onSubmit={this.submitItem}>
        <input className='form-input' 
          placeholder='Please enter your task!'
          type='text'
          value={this.item}
          name='item'
          onChange={this.handleChanges}
        />
        <div className="button-wrapper">
          <button onClick={this.submitItem}
                  className='btn submit-btn'>
                    Add Task
          </button>
          <button type='button'
                  className='btn clear-btn'
                  onClick={this.props.clearCompleted}>
                    Clear Completed Items
          </button>
        </div>
      </form>
    );
  }
}

export default ToDoForm;