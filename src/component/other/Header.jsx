import React from 'react'

const Header = (props) => {

  const logOutUser = () => {

    // Login information remove
    localStorage.removeItem('loggedInUser')

    // App ko logout state mein le jana
    props.changeUser('')

  }

  return (

    <div className='flex justify-between items-end'>

      <h1 className='text-2xl font-medium'>

        Hello
        <br />

        <span className='text-3xl font-semibold'>

          {props.data
            ? props.data.firstName
            : 'Admin'
          }

          👋

        </span>

      </h1>


      <button
        onClick={logOutUser}
        className='text-lg font-medium bg-red-600 text-white px-5 py-2 rounded-full cursor-pointer'
      >

        Log Out

      </button>

    </div>

  )

}

export default Header