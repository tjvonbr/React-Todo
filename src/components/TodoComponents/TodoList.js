import React from 'react';
import ToDoItem from './ToDoItem';
import { Checkbox } from 'semantic-ui-react';

const ToDoList = props => {
  return (
    <div className="toDo-list">
      {props.toDoList.map(item => (
        <div className="listItem-wrapper">
          <ToDoItem key={item.id} item={item} toggleItem={props.toggleItem} />
        </div>  
      ))}
    </div>
  )
}

export default ToDoList;