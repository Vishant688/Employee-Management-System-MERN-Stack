import React from 'react'

const TaskNumber = ({data}) => {
    console.log(data)
  return (
    <div className='flex mt-10  justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] bg-red-400  py-6  px-10'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-amber-500 py-6  px-10'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Complete Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-cyan-600  py-6  px-10'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-emerald-400  py-6  px-10'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

      
    </div>
  )
}

export default TaskNumber
