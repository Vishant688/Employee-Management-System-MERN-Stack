import React, { useEffect, useState } from 'react'
import api from '../../utilss/axios'

const AllTask = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const fetchTasks = async () => {

      try {

        const response = await api.get(
          `/api/tasks`
        )

        setTasks(response.data.tasks)

      } catch (error) {

        console.log(
          "FETCH TASKS ERROR:",
          error
        )

        console.log(
          "RESPONSE:",
          error.response?.data
        )

      }

    }

    fetchTasks()

  }, [])


  // EMPLOYEE WISE TASK COUNT
  const employeeData = {}

  tasks.forEach((task) => {

    const employee = task.assignedTo

    if (!employee) return

    const employeeId = employee._id

    if (!employeeData[employeeId]) {

      employeeData[employeeId] = {

        firstName: employee.firstName,

        newTask: 0,

        active: 0,

        completed: 0,

        failed: 0

      }

    }


    if (task.status === "new") {

      employeeData[employeeId].newTask++

    }

    if (task.status === "accepted") {

      employeeData[employeeId].active++

    }

    if (task.status === "completed") {

      employeeData[employeeId].completed++

    }

    if (task.status === "failed") {

      employeeData[employeeId].failed++

    }

  })


  const employees = Object.values(employeeData)


  return (

    <div className='bg-[#1c1c1c] p-5 mt-5'>

      {/* HEADER */}

      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>

        <h2 className='text-lg font-medium w-1/5'>
          Employee Name
        </h2>

        <h3 className='text-lg font-medium w-1/5'>
          New Task
        </h3>

        <h5 className='text-lg font-medium w-1/5'>
          Active Task
        </h5>

        <h5 className='text-lg font-medium w-1/5'>
          Completed
        </h5>

        <h5 className='text-lg font-medium w-1/5'>
          Failed
        </h5>

      </div>


      {/* EMPLOYEE DATA */}

      <div>

        {employees.map((employee, idx) => (

          <div
            key={idx}
            className='border-2 border-b-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'
          >

            <h2 className='text-lg font-medium w-1/5'>
              {employee.firstName}
            </h2>

            <h3 className='text-lg font-medium w-1/5 !text-blue-600'>
              {employee.newTask}
            </h3>

            <h5 className='text-lg font-medium w-1/5 !text-yellow-600'>
              {employee.active}
            </h5>

            <h5 className='text-lg font-medium w-1/5 !text-fuchsia-600'>
              {employee.completed}
            </h5>

            <h5 className='text-lg font-medium w-1/5 !text-red-700'>
              {employee.failed}
            </h5>

          </div>

        ))}

      </div>

    </div>

  )

}

export default AllTask