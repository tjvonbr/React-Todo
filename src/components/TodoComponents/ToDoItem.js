import React from 'react';

const ToDoItem = props => {
  return (
    <div
      className={`item${props.item.completed ? '-completed' : '-incomplete'}`}
    
    >
      <p onClick={() => props.toggleItem(props.item.id)}>{props.item.name}</p>
    </div>
  )
}

export default ToDoItem;