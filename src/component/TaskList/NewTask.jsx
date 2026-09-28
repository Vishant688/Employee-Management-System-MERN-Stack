import React from 'react'
import api from '../../utilss/axios'

const NewTask = ({ data, employeeData, updateEmployeeData }) => {

  const acceptHandler = async () => {

    try {

      // Backend ko task accept karne ki request
      const response = await api.put(
      `${import.meta.env.VITE_API_URL}/api/tasks/${data._id}/accept`
      )

      const updatedTask = response.data.task


      // Employee ke tasks ko update karna
      const updatedTasks = employeeData.tasks.map((task) => {

        if (task._id === updatedTask._id) {

          return {
            ...task,

            newTask: false,
            active: true,
            completed: false,
            failed: false,

            status: "accepted"
          }

        }

        return task

      })


      // Task numbers dobara calculate karna
      const updatedEmployee = {

        ...employeeData,

        tasks: updatedTasks,

        taskNumbers: {

          ...employeeData.taskNumbers,

          newTask: updatedTasks.filter(
            (task) => task.newTask
          ).length,

          active: updatedTasks.filter(
            (task) => task.active
          ).length,

          completed: updatedTasks.filter(
            (task) => task.completed
          ).length,

          failed: updatedTasks.filter(
            (task) => task.failed
          ).length

        }

      }


      // Parent/App state update
      updateEmployeeData(updatedEmployee)

    } catch (error) {

      console.log("ACCEPT ERROR:", error)
      console.log("RESPONSE:", error.response?.data)
      console.log("STATUS:", error.response?.status)

      alert(
        error.response?.data?.message ||
        "Failed to accept task"
      )

    }

  }


  return (

    <div className='flex-shrink-0 h-full w-[300px] bg-blue-900 rounded-xl p-5'>

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


      <div className='mt-2'>

        <button
          onClick={acceptHandler}
          className='cursor-pointer w-full bg-red-600 rounded-2xl text-sm'
        >
          Accept task
        </button>

      </div>

    </div>

  )

}

export default NewTask