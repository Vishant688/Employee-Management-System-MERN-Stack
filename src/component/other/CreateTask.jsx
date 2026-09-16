import React, { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const CreateTask = () => {

 const [userData,setUserData] = useContext(AuthContext)

const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, settaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')

const [newTask, setNewTask] = useState({})

  const submitHandler =(e)=>{
  e.preventDefault()

   setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

   const data = userData
   console.log(data)

  data.forEach(function (elem) {
    if (assignTo == elem.firstName) {
     elem.tasks.push(newTask)
     elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
  
  }
})

setUserData(data)

   setTaskTitle('')
   setCategory('')
   setAssignTo('')
   settaskDescription('')
   setTaskDate('')
  }
  return (
         <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
         submitHandler(e)
        }}
        className=' flex-wrap flex w-full bg-black items-start justify-between '>

        <div className='w-1/2 p-3'>
      
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input

              value={taskTitle}
              onChange={(e)=>{
              setTaskTitle(e.target.value)
              }}

              className='text-sm py-1 px-2 w-4/5 rounded outline-none b g-transparent border-[1px] border-gray-400 ' type='text' placeholder='Make a UI design'/>
            </div>
            
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input 

             value={taskDate}
              onChange={(e)=>{
              setTaskDate(e.target.value)
              }}

            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 ' type='date'/>
            </div>

            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input 

             value={assignTo}
             onChange={(e)=>{
             setAssignTo(e.target.value)
              }}

            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400  ' type='text' placeholder='employee name'/>
            </div>

            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input

             value={category}
              onChange={(e)=>{
              setCategory(e.target.value)
              }}

            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 ' type='text' placeholder='design,dev,etc'/>
            </div>

            </div>

          <div className='w-2/5 flex flex-col items-start p-3'>
            <h3 className='text-sm text-green-600 mb-0.5'>Description</h3>
            <textarea
             value={taskDescription}
              onChange={(e)=>{
              settaskDescription(e.target.value)
              }}

            className='w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols='30' rowa='10'></textarea>
        

            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
              </div>
        </form>
      
      </div>
  )
}

export default CreateTask
