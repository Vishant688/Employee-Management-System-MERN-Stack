import React, { useEffect, useState } from 'react'
import api from './utilss/axios'

import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // PAGE REFRESH KE BAAD LOGIN CHECK
  useEffect(() => {

    const loggedInUser =
      localStorage.getItem("loggedInUser")

    if (loggedInUser) {

      const userData = JSON.parse(loggedInUser)

      setUser(userData.role)
      setLoggedInUserData(userData.data)

    }

  }, [])


  // EMPLOYEE DATA UPDATE
  const updateEmployeeData = (updatedEmployee) => {

    setLoggedInUserData(updatedEmployee)

    const loggedInUser =
      JSON.parse(localStorage.getItem("loggedInUser"))

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        ...loggedInUser,
        role: "employee",
        data: updatedEmployee
      })
    )

  }


  // LOGIN FUNCTION
  const handleLogin = async (email, password) => {

    try {

      // LOGIN API
      const response = await api.post(
        `/api/auth/login`,
        {
          email,
          password
        }
      )

      const user = response.data.user
      const token = response.data.token


      // IMPORTANT:
      // MY-TASKS API CALL SE PEHLE TOKEN SAVE KARNA HAI
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: user.role,
          data: user,
          token: token
        })
      )


      // ADMIN LOGIN
      if (user.role === "admin") {

        setUser("admin")
        setLoggedInUserData(user)

      }


      // EMPLOYEE LOGIN
      if (user.role === "employee") {

        // Ab axios interceptor ko token mil jayega
        const taskResponse = await api.get(
          `/api/tasks/my-tasks`
        )

        const backendTasks =
          taskResponse.data.tasks


        // BACKEND TASKS KO FRONTEND FORMAT ME CONVERT
        const tasks = backendTasks.map((task) => ({

          ...task,

          id: task._id,

          newTask:
            task.status === "new",

          active:
            task.status === "accepted",

          completed:
            task.status === "completed",

          failed:
            task.status === "failed"

        }))


        // TASK COUNTS
        const taskNumbers = {

          newTask:
            tasks.filter(
              (task) => task.newTask
            ).length,

          active:
            tasks.filter(
              (task) => task.active
            ).length,

          completed:
            tasks.filter(
              (task) => task.completed
            ).length,

          failed:
            tasks.filter(
              (task) => task.failed
            ).length

        }


        // EMPLOYEE DATA
        const employeeData = {

          ...user,

          tasks: tasks,

          taskNumbers: taskNumbers

        }


        // EMPLOYEE DASHBOARD OPEN
        setUser("employee")

        setLoggedInUserData(
          employeeData
        )


        // UPDATED DATA + TOKEN SAVE
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: employeeData,
            token: token
          })
        )

      }

    } catch (error) {

      console.log(
        "LOGIN ERROR:",
        error
      )

      console.log(
        "RESPONSE:",
        error.response?.data
      )

      console.log(
        "STATUS:",
        error.response?.status
      )

      alert(
        error.response?.data?.message ||
        "Invalid Credentials"
      )

    }

  }


  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem(
      "loggedInUser"
    )

    setUser(null)

    setLoggedInUserData(null)

  }


  return (

    <div>

      {/* LOGIN */}

      {!user && (

        <Login
          handleLogin={handleLogin}
        />

      )}


      {/* ADMIN DASHBOARD */}

      {user === "admin" && (

        <AdminDashboard
          changeUser={handleLogout}
        />

      )}


      {/* EMPLOYEE DASHBOARD */}

      {user === "employee" && (

        <EmployeeDashboard
          changeUser={handleLogout}
          data={loggedInUserData}
          updateEmployeeData={
            updateEmployeeData
          }
        />

      )}

    </div>

  )

}

export default App