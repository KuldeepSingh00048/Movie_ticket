import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='bg-green-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-green-300 
    duration-500'>
      {props.children}
    </button>
      </>
  )
}

export default Button