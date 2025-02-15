import React from 'react'

const Body = () => {
  return (
    <div>
      <div>
        <h1 className='text-[40px] font-bold text-white flex justify-center mt-20 '>
          Hello, What Do You Want To Learn?
        </h1>
      </div>
      <div className=' flex justify-center'>
        <input className=' text-black flex  bg-white w-[800px] mt-10 rounded-lg h-[65px]' type="text" placeholder='      Complete Interview Preparation' />
      </div>
      <div className='flex justify-center gap-10 mt-10'>
        <button className=' border w-52 h-10 rounded-lg text-white'>Master DS and ML</button>
        <button className=' border w-52 h-10 rounded-lg bg-blue-400 text-white'>Courses @90% Refund</button>
        <button className=' border w-52 h-10 rounded-lg text-white'>Full Stack Live Classes</button>
      </div>

    </div>
  )
}

export default Body