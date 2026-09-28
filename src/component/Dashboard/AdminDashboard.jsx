import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-20 '>
      <Header changeUser={props.changeUser} />
      <CreateTask/>
    


    </div>
  )
}

export default AdminDashboard
