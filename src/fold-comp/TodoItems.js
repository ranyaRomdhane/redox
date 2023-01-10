import React from 'react'
import { useDispatch } from 'react-redux';
import { doneTask,  removeTask } from './redux/Todoslice/Todoslice';
import EditTask from './EditTask';

function TodoItems({ todo }) {
const dispatch = useDispatch();
  return (
    <div className={`todo-item ${todo.isDone ? "done" : "undone"} `}>
        <div className='text'>
        <h2>{todo.title}</h2>
         <p>{todo.description}</p>
         </div> 
         <span  onClick={() => dispatch(doneTask({ id: todo.id}))}>{ todo.isDone ? "done":"Not done"}</span>
       <EditTask id={todo.id}/>
         <button onClick={() => dispatch(removeTask({ id: todo.id})) }>Remove</button>
     </div>
  );
};

export default TodoItems