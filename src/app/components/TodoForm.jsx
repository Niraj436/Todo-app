"use client"
import React, { useState } from "react";


const TodoForm = ({addTodos}) => {
    const[value, setValue] = useState("")
    
    const handleAdd = () =>{
        addTodos(value)
        setValue(" ")
    }
  return (
    <>
    <div className="flex flex-col gap-y-4 px-2">
      <div>
        <h1 className="text-2xl font-bold text-center">Todo app</h1>
      </div>
      <div className="flex items-center gap-x-2 ">
        <input onChange={(e)=>setValue(e.target.value)} value={value} type="text" placeholder="Write your task" className="rounded-xl font-light px-3 py-2 text-slate-800 outline-none"/>
        <button onClick={()=> handleAdd()} className="bg-orange-600 px-6 py-2 rounded-lg ">Add</button>
      </div>
      
    </div> 
        </>
  );
};

export default TodoForm;
