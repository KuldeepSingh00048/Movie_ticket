import React from 'react'
import Home from './movie.png'
const home = () => {
  return (
    <>
    <div className='mt-[88px] h-[420px] flex justify-center '>
    <div className=' flex-col mx-10 p-10'>
          <h1 className='text-5xl text-green-800 font-bold font-Comic'> Kuldeep Singh's Assignment </h1>
          <br/>
          <h1 className='text-4xl text-green-600 font-bold font-Comic'>Book ticket for your latest Upcoming Movies </h1>
          <br />
      <div className='px-2 text-base text-green-600 font-semibold font-verdana'>with the most discount and worth it money.</div>
      </div>
        <img className=' mx-10 h-80 w-96 my-7  rounded-xl' src={Home} />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
  )
}

export default home