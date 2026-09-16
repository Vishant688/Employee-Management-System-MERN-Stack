import React from 'react'

const NewTask = ({data}) => {
  return (
      <div className=' flex-shrink-0 h-full w-[300px] bg-blue-900 rounded-xl p-5 '>
        
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-700  text-sm px-3 py-1 rounded-xl '>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>
        <div className='mt-2 '>
         <button className=' cursor-pointer w-full bg-red-600 rounded-2xl text-sm  '>Accept task</button>
        </div>
      </div>
  )
}

export default NewTask
