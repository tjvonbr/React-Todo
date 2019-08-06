import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = props => {
  return (
    <div className="toDo-list">
      {props.toDoList.map(item => (
        <ToDoItem key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  )
}

export default ToDoList;