import React, { useEffect, useState } from 'react'
import api from '../../utilss/axios'

const CreateTask = () => {

  const [employees, setEmployees] = useState([])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {

    const fetchEmployees = async () => {

      try {

        const response = await api.get(
          `/api/auth/employees`
        )

        setEmployees(response.data.employees)

      } catch (error) {

        console.log(
          "EMPLOYEE FETCH ERROR:",
          error
        )

      }

    }

    fetchEmployees()

  }, [])

  const submitHandler = async (e) => {

    e.preventDefault()

    try {

      const employee = employees.find(
        (elem) => elem.email === assignTo
      )

      if (!employee) {

        alert("Please select an employee")
        return

      }

      const response = await api.post(
        `/api/tasks`,
        {
          taskTitle,
          taskDescription,
          taskDate,
          category,
          assignedTo: employee.email
        }
      )

      console.log(
        "Task created:",
        response.data
      )

      alert("Task created successfully")

      setTaskTitle('')
      setTaskDescription('')
      setTaskDate('')
      setAssignTo('')
      setCategory('')

    } catch (error) {

      console.log(
        "CREATE TASK ERROR:",
        error
      )

      console.log(
        "RESPONSE:",
        error.response?.data
      )

      alert(
        error.response?.data?.message ||
        "Failed to create task"
      )

    }

  }

  return (

    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>

      <form
        onSubmit={submitHandler}
        className='flex-wrap flex w-full bg-black items-start justify-between'
      >

        <div className='w-1/2 p-3'>

          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Task Title
            </h3>

            <input
              value={taskTitle}
              onChange={(e) =>
                setTaskTitle(e.target.value)
              }
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='Make a UI design'
              required
            />

          </div>

          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Date
            </h3>

            <input
              value={taskDate}
              onChange={(e) =>
                setTaskDate(e.target.value)
              }
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='date'
              required
            />

          </div>

          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Assign to
            </h3>

            <select
              value={assignTo}
              onChange={(e) =>
                setAssignTo(e.target.value)
              }
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              required
            >

              <option value=''>
                Select Employee
              </option>

              {employees.map((employee) => (

                <option
                  key={employee._id}
                  value={employee.email}
                >
                  {employee.firstName}
                </option>

              ))}

            </select>

          </div>

          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Category
            </h3>

            <input
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='design,dev,etc'
              required
            />

          </div>

        </div>

        <div className='w-2/5 flex flex-col items-start p-3'>

          <h3 className='text-sm text-green-600 mb-0.5'>
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            className='w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400'
            required
          />

          <button
            type='submit'
            className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'
          >
            Create Task
          </button>

        </div>

      </form>

    </div>

  )
}

export default CreateTask