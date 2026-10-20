import React from 'react'
import"./#Todo.css";
export default function ListTask({task,index,removeTask}) {
  return (
    <>
        <div className='list-task'>
            {task.title}
            <button  onClick={()=>{removeTask(index)}}  className='Delete-btn'>Delete</button>
        </div>
    </>
  )
}
