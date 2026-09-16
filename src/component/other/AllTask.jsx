import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'
import EmployeeDashboard from '../Dashboard/EmployeeDashboard'
const AllTask = () => {
  
  const [userData,setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5  '>

       <div className=' bg-red-400 mb-2 py-2 px-4 flex  justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>

       </div>

       <div className=''>
       {userData.map(function(elem,idx){

        return <div  key={idx} className=' border-2 border-b-emerald-500 mb-2 py-2 px-4 flex  justify-between rounded'>
        <h2 className=' text-lg font-medium w-1/5 '>{elem.firstName}</h2>
        <h3 className=' text-lg font-medium w-1/5 !text-blue-600'>{elem.taskNumbers.newTask}</h3>
        <h5 className=' text-lg font-medium w-1/5 !text-yellow-600'>{elem.taskNumbers.active}</h5>
        <h5 className=' text-lg font-medium w-1/5  !text-fuchsia-600'>{elem.taskNumbers.completed}</h5>
        <h5 className=' text-lg font-medium w-1/5 !text-red-700'> {elem.taskNumbers.failed}</h5>
       </div>
       })}
      </div>


      

         {/* <div className='bg-emerald-300 mb-2 py-2 px-4  flex  justify-between rounded'>
        <h2>Vishant</h2>
        <h3>Make a UI Design</h3>
        <h3>Staus</h3>
       </div>

        <div className='bg-yellow-300 mb-2 py-2 px-4  flex  justify-between rounded'>
        <h2>Vishant</h2>
        <h3>Make a UI Design</h3>
        <h3>Staus</h3>
       </div>

        <div className='bg-pink-300 mb-2 py-2 px-4  flex  justify-between rounded'>
        <h2>Vishant</h2>
        <h3>Make a UI Design</h3>
        <h3>Staus</h3>
       </div>

        <div className='bg-sky-300 mb-2 y-2 px-4  flex  justify-between rounded'>
        <h2>Vishant</h2>
        <h3>Make a UI Design</h3>
        <h3>Staus</h3>
       </div> */}
    </div>
  )
}

export default AllTask
