import React, { useState } from 'react'
import { setLocalStorage } from '../utils/localStorage'

const Header = (props) => {
 
// const [username, setUsername] = useState('')
// if(!data){
//   setUsername('Admin')
// } else{
//   setUsername(data.firstName)
// }

const logOutUser =()=>{
localStorage.setItem('loggedInUser','')
//window.location.reload()
props.changeUser('')
console.log(props.changeUser)
}

  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{props.data ? props.data.firstName:'Admin'} 👋</span>    </h1>
      <button onClick={logOutUser} className= 'text-lg font-medium bg-red-600 text-white px-5 py-2 rounded-full cursor-pointer'> Log Out</button>
    </div>
  )
}

export default Header
