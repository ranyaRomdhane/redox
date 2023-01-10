 
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';
import React, { useState } from 'react'


function Todolist() {
   const todos = useSelector((state) => state.todo.todolist);
console.log(todos);
const [showdone, setshowdone] = useState(false);
  return (
    <div className='todolist '>
      <AddTodo />
      <button className='butt' 
       onClick={() => setshowdone(!showdone)}>
        {showdone ? 'show done' : 'show undone'}</button>
        {todos.filter((todo) => todo.isDone === showdone )
        .map((todo) => (
       <TodoItems todo={todo} /> 
        ))}
    </div>
  ) 
}

export default Todolist