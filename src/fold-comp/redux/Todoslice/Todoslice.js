import { createSlice } from '@reduxjs/toolkit'


const initialState = {
todolist: [
    {
        id: Math.random(),
        title: 'todo items 1',
        description: 'anything you want 1',
        isDone: false,
    },
    {
        id: Math.random(),
        title: 'todo items 2',
        description: 'anything you want 2',
        isDone: false,
    },
    {
        id: Math.random(),
        title: 'todo items 3',
        description: 'anything you want 3',
        isDone: true,
    },
],
};

export const Todoslice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  addTask: (state, action) => {
    state.todolist.push(action.payload);
    },
    
  removeTask: (state, action) => {
    state.todolist = state.todolist.filter(
      (el) => el.id !== action.payload.id);
      },
      
      doneTask: (state, action) => {
        let i= state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[i] = {...state.todolist[i], isDone: !state.todolist[i].isDone,
      } ;
      },

UpdateTask: (state, action) => {
let i = state.todolist.findIndex((el) => el.id === action.payload.id);

 state.todolist[i] = {
  ...state.todolist[i],
  title: action.payload.edited.title,
  description: action.payload.edited.description,
};

},

  },
});


export const {addTask, removeTask, doneTask, UpdateTask } = Todoslice.actions;

export default Todoslice.reducer