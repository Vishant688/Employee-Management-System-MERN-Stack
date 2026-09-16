import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './component/utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)/

  const [user,setUser]= useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)
 
  useEffect(() => {

      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
      const userData =JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)

      }
    
  
  },[])

  // Mark aas button for task submit task..
 const updateEmployeeData = (updatedEmployee) => {

    setLoggedInUserData(updatedEmployee)

    const employees = JSON.parse(localStorage.getItem('employees'))

    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id
        ? updatedEmployee
        : employee
    )

    localStorage.setItem(
      'employees',
      JSON.stringify(updatedEmployees)
    )

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        role: 'employee',
        data: updatedEmployee,
        email: updatedEmployee.email
      })
    )
  }



  const handleLogin =(email,password) =>{
  if(email == 'admin@me.com' && password =='123'){
  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

  // YEHA PAR HUM EMPLOYEE KA EMAIL DAAAELENAGY TOH OPEN HOGA:

  } else if(userData ){
    const employee= userData.find((e)=>email == e.email && e.password == password)
    if (employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee,email:employee.email}))

    }
    
  }
   else{
    alert("invalid Credentialsn")
  }

  }


  //

 
 
  return (
    <div>
      {!user &&  <Login handleLogin={handleLogin}/>}
      {user === 'admin' && <AdminDashboard changeUser={setUser}/>}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} updateEmployeeData={updateEmployeeData} />}
      {/* <EmployeeDashboard/>  */}
      {/* <AdminDashboard/> */}
    
    </div>
  )
}

export default App
