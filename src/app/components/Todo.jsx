import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Todo = ({todo, deleteTodo, editTodo}) => {
  return (
    <div className='bg-indigo-500 px-3 py-3 rounded-lg flex items-center justify-between gap-x-2 '>
        <p className='max-w-72 text-wrap w-5/6'>{todo.task}</p>
        
        <FaEdit className='text-xl cursor-pointer' onClick={()=> editTodo(todo.id)}/>
        <FaTrashAlt  className='text-white w-1/6 cursor-pointer '  onClick={()=>deleteTodo(todo.id)}/>
        
    </div>
  )
}

export default Todo