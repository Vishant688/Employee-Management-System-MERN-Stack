import React from 'react'
import api from '../../utilss/axios'

const AcceptTask = ({
  data,
  employeeData,
  updateEmployeeData
}) => {

  // =========================
  // COMPLETE TASK
  // =========================
  const completeHandler = async () => {

    try {

      const response = await api.put(
        `${import.meta.env.VITE_API_URL}/api/tasks/${data._id}/complete`
)

      const updatedTask = response.data.task

      const updatedTasks = employeeData.tasks.map((task) => {

        if (task._id === updatedTask._id) {

          return {
            ...task,
            newTask: false,
            active: false,
            completed: true,
            failed: false,
            status: "completed"
          }

        }

        return task

      })


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


      updateEmployeeData(updatedEmployee)

    } catch (error) {

      console.log("COMPLETE ERROR:", error)
      console.log("RESPONSE:", error.response?.data)
      console.log("STATUS:", error.response?.status)

      alert(
        error.response?.data?.message ||
        "Failed to complete task"
      )

    }

  }


  // =========================
  // FAILED TASK
  // =========================
  const failedHandler = async () => {

    try {

      const response = await api.put(
        `${import.meta.env.VITE_API_URL}/api/tasks/${data._id}/fail`
)

      const updatedTask = response.data.task

      const updatedTasks = employeeData.tasks.map((task) => {

        if (task._id === updatedTask._id) {

          return {
            ...task,
            newTask: false,
            active: false,
            completed: false,
            failed: true,
            status: "failed"
          }

        }

        return task

      })


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


      updateEmployeeData(updatedEmployee)

    } catch (error) {

      console.log("FAILED ERROR:", error)
      console.log("RESPONSE:", error.response?.data)
      console.log("STATUS:", error.response?.status)

      alert(
        error.response?.data?.message ||
        "Failed to mark task as failed"
      )

    }

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
          className='cursor-pointer bg-emerald-900 py-1 px-3 text-sm rounded-2xl'
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