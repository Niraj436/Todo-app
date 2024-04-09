"use client"
import React, { useState } from "react";


const EditTodoForm = ({editTodo,task}) => {
    const[value, setValue] = useState(task.task)
    
    const handleAdd = () =>{
        editTodo(value,task.id)
        setValue(" ")
    }
  return (
    <>
    <div className="flex flex-col gap-y-4 px-2">
      
      <div className="flex items-center gap-x-2 ">
        <input onChange={(e)=>setValue(e.target.value)} value={value} type="text" placeholder="Update task" className="rounded-xl font-light px-3 py-2 text-slate-800 outline-none"/>
        <button onClick={()=> handleAdd()} className="bg-orange-600 px-3 py-2 rounded-lg ">Update</button>
      </div>
      
    </div> 
        </>
  );
};

export default EditTodoForm;
