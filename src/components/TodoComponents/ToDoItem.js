import React from 'react';

const ToDoItem = props => {
  return (
    <div
      className={`item${props.item.completed ? '-completed' : '-incomplete'}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  )
}

export default ToDoItem;