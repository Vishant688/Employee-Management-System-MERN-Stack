import React, { useState } from 'react'

const Login = ({handleLogin}) => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const submitHandler=(e)=>{

       
        e.preventDefault()
         handleLogin(email,password)
                

    setEmail('')
    setPassword('')    
    }
  return (
    <div>
    <div className='flex  h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
            <form 
               onSubmit={(e)=>{
                submitHandler(e)
               }}
               
             className=' flex flex-col justify-center gap-3 '>
                <input 
                 value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}
                     required className=' outline-none bg-transparent border-2 border-b-emerald-50 text-xl py-3 px-5 rounded-full placeholder:text-gray-500'type="email"placeholder='Enter your email' />

                <input 
                 value={password}
                 onChange={(e)=>{
                  setPassword(e.target.value)
                 }}
                required className=' outline-none bg-transparent border-2 border-b-emerald-50 rounded-full text-xl py-3 px-5 mt-4 placeholder:text-gray-500' type='password'placeholder='Enter your password'/>
                <button className='text-white outline-none   border-2 bg-emerald-600 rounded-full text-xl py-2 px-4 mt-5 placeholder:text-white '>Log in</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
