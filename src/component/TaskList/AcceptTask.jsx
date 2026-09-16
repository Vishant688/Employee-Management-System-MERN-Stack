import React from 'react'

const AcceptTask = ({ data, employeeData, updateEmployeeData }) => {

  const completeHandler = () => {

    const updatedEmployee = {
      ...employeeData,

      taskNumbers: {
        ...employeeData.taskNumbers,
        active: employeeData.taskNumbers.active - 1,
        completed: employeeData.taskNumbers.completed + 1
      },

      tasks: employeeData.tasks.map((task) => {

        if (task === data) {
          return {
            ...task,
            active: false,
            newTask: false,
            completed: true,
            failed: false
          }
        }

        return task
      })
    }

    updateEmployeeData(updatedEmployee)
  }


  const failedHandler = () => {

    const updatedEmployee = {
      ...employeeData,

      taskNumbers: {
        ...employeeData.taskNumbers,
        active: employeeData.taskNumbers.active - 1,
        failed: employeeData.taskNumbers.failed + 1
      },

      tasks: employeeData.tasks.map((task) => {

        if (task === data) {
          return {
            ...task,
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        }

        return task
      })
    }

    updateEmployeeData(updatedEmployee)
  }


  return (

    <div className='flex-shrink-0 h-full w-[300px] bg-fuchsia-800 rounded-xl p-5'>

      <div className='flex justify-between items-center'>

        <h3 className='bg-red-700 text-sm px-3 py-1 rounded-xl'>
          {data.category}
        </h3>

        <h4 className='text-sm'>
          {data.taskDate}
        </h4>

      </div>


      <h2 className='mt-5 text-2xl font-xl'>
        {data.taskTitle}
      </h2>


      <p className='text-sm mt-2'>
        {data.taskDescription}
      </p>


      <div className='flex justify-between mt-2'>

        <button
          onClick={completeHandler}
          className= 'cursor-pointer bg-emerald-900 py-1 px-3 text-sm rounded-2xl'
        >
          Mark as Completed
        </button>


        <button
          onClick={failedHandler}
          className='cursor-pointer bg-indigo-900 py-1 px-3 text-sm rounded-2xl'
        >
          Mark as Failed
        </button>

      </div>

    </div>
  )
}

export default AcceptTask