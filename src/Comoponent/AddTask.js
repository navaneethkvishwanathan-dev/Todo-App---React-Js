import React, { useState } from 'react'
import"./#Todo.css";
export default function AddTask({addTask}) {
    const [value,setvalu]=useState("")
    const addItem=()=>{
      
        addTask(value)

    }
  return (
    <>
        <div className='input-containor'>
             <input type='text'
              className='input'
             placeholder='Add your task'
             onChange={(e)=>{setvalu(e.target.value) 
              
             }
            }
             />
             <button  onClick={addItem} className='but-add'>Add</button>
        </div>
    </>
  )
}
