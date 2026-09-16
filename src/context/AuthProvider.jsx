import React, { createContext, useEffect, useState } from 'react'

import {
  getLocalStorage,
  setLocalStorage
} from '../component/utils/localStorage'


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    setLocalStorage()
    // LocalStorage se data nikalo
    const {employees} = getLocalStorage()
    setUserData(employees)
    // Agar data nahi hai to pehle data save karo
    

  }, [])


  return (
<div>
    <AuthContext.Provider value={[userData,setUserData]}>

      {children}

    </AuthContext.Provider>
</div>
  )
}


export default AuthProvider