import React from 'react'
import arrow from "../components/assets/arrow.png"
// import bell from "../components/assets/bell.png"

const Explore = () => {
    return (
        <div>
            <div className='bg-black'>
                <div className='ml-[18%] mr-[18%]  px-9 py-9 bg-black' >
                    <p className='text-white text-[25px]  font-bold'>Must Explore</p><br />
                    <div className=' flex gap-12'>
                        <div className='bg-blue-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Jobs for you
                            <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '> <img src={arrow} alt="" /></button>
                        </div>
                        <div className='bg-blue-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative  '>Hire with us
                            <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                        </div>
                        <div className='bg-blue-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Advertise with us
                            <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                        </div>
                        <div className='bg-blue-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Placement Training ...
                            <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-black'>
                <div className='ml-[18%] mt-[-30px] mr-[18%]  px-9 py-9 bg-black' >
                    <p className='text-white text-[25px]  font-bold'>Explore</p><br />
                    <div className='flex gap-12'>
                        <div className='bg-[rgb(79,189,163)] w-[48%] h-64 rounded-xl font-bold px-4 py-4 text-2xl text-white relative flex justify-center flex-col gap-2 items-center'> Data Structure and Algorithms<br />
                            <button className=' flex gap-3 mt-2 border rounded-2xl w-[210px] px-5 hover:bg-black'>View More<img className=' mt-1' src={arrow} alt="" /></button></div>
                        <div className='bg-[rgb(102,106,209)] w-[48%] h-64 rounded-xl font-bold px-4 py-4 text-2xl text-white relative flex justify-center flex-col gap-2 items-center'> Practice DSA<br />
                            <button className=' flex gap-3 mt-2 border rounded-2xl w-[210px] px-5 hover:bg-black'>View More<img className=' mt-1' src={arrow} alt="" /></button></div>
                    </div>
                    <div className='flex mt-14 gap-12'>
                        <div className='bg-[rgb(192,122,121)] w-[48%] h-64 rounded-xl font-bold px-4 py-4 text-2xl text-white relative flex justify-center flex-col gap-2 items-center'> Web Development<br />
                            <button className=' flex gap-3 mt-2 border rounded-2xl w-[210px] px-5 hover:bg-black'>View More<img className=' mt-1' src={arrow} alt="" /></button></div>
                        <div className='bg-[rgb(113,85,159)] w-[48%] h-64 rounded-xl font-bold px-4 py-4 text-2xl text-white relative flex justify-center flex-col gap-2 items-center'> AI ML & Data Science<br />
                            <button className=' flex gap-3 mt-2 border rounded-2xl w-[210px] px-5 hover:bg-black'>View More<img className=' mt-1' src={arrow} alt="" /></button></div>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div className='flex  ml-[18%] mr-[18%] justify-between px-9 py-9 bg-black' >
                    <p className='text-white text-[25px]  font-bold'>Web Development</p>
                    <button className=' border rounded-[25px] w-24'>View all</button>
                </div>
                <div className=' flex  ml-[18%] mr-[18%] px-9 py-9 gap-12'>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>JavaScript
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '> <img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative  '>HTML
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>CSS
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>ReactJS
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                </div>
                <div className=' flex  ml-[18%] mr-[18%] px-9 py-9 gap-12'>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Node.js
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '> <img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative  '>Django
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Frontend Development
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-amber-700 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Backend Development
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div className='flex  ml-[18%] mr-[18%] justify-between px-9 py-9 bg-black' >
                    <p className='text-white text-[25px]  font-bold'>AI ML & Data Science</p>
                    <button className=' border rounded-[25px] w-24'>View all</button>
                </div>
                <div className=' flex  ml-[18%] mr-[18%] px-9 py-9 gap-12'>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Machine Learning
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '> <img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative  '>Data Science
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Data Analysis
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Data Visualization
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                </div>
                <div className=' flex  ml-[18%] mr-[18%] px-9 py-9 gap-12'>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Deep Learning
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '> <img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative  '>Natural Language Processing
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Computer Vision
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-emerald-900 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Artificial Intelligence
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div className='flex  ml-[18%] mr-[18%] justify-between px-9 py-9 bg-black' >
                    <p className='text-white text-[25px]  font-bold'>Programming Languages</p>
                    <button className=' border rounded-[25px] w-24'>View all</button>
                </div>
                <div className=' flex  ml-[18%] mr-[18%] px-9 py-9 gap-12'>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Python
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '> <img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative  '>Java
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>C++
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>C
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                </div>
                <div className=' flex  ml-[18%] mr-[18%] px-9 py-9 gap-12'>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>R
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '> <img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative  '>PHP
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Flutter
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                    <div className='bg-violet-800 w-72 h-32 rounded-xl font-bold px-4 py-4 text-2xl text-white relative '>Golang
                        <button className='  absolute right-6 bottom-3 hover:bg-black rounded-full '><img src={arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore