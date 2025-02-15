import React from 'react'
import bar from "../components/assets/bar.png"
import grow from "../components/assets/grow.png"
import promo from "../components/assets/promo.jpg"
import star from "../components/assets/star.png"
// import nodejs from "../components/assets/nodejs.webp"

const Course = () => {
  return (
    <div>
      <div className='bg-black'>
        <div className='flex mt-24 ml-[18%] mr-[18%] justify-between px-9 py-9 bg-black' >
          <p className='text-white text-[25px]  font-bold'>Courses</p>
          <button className=' border rounded-[25px] w-24'>View all</button>
        </div>
        {/* ---------------------------- */}
        <div className='flex mt-5 ml-[15%] mr-[15%] px-5 py-5 gap-14 justify-center' >
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure className=' relative  '>
              <img
                src="https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/Course_DSA_to_Dev_1720846081_1736594558.webp"
                alt="Shoes" />
              <button className="  absolute flex justify-center gap-1   bg-slate-600 text-white rounded-[30px] text-xs w-12 p-1 top-3 right-3">
                <img className='w-4 h-4 flex' src={star} alt="" />4.4</button>
            </figure>
            <div class="card-body">
              <h2 class="card-title">DSA to Development:A Complete Guide</h2><br />
              <p className=' flex gap-2 text-sm'><img className='w-5 h-5' src={bar} alt="" />Beginner to Advance</p>
              <div class=" flex gap-2  justify-between mt-3">
                <p className=' flex justify-start gap-2 text-sm'><img className='w-5' src={grow} alt="" />488k+ interested Geeks</p>
                <button class="w-[80px] text-xs h-5 font-bold text-green-600">Explore now</button>
              </div>
              <div className='mt-3'>
                <button className='bg-yellow-500 text-black rounded-xl text-sm w-[300px] h-9'>Refund of 90% is available on this course</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure className=' relative'>
              <img
                src="https://media.geeksforgeeks.org/img-practice/prod/courses/227/Web/Content/backend_dev_1736591964.webp"
                alt="Shoes" />
              <button className="  absolute flex justify-center gap-1   bg-slate-600 text-white rounded-[30px] text-xs w-12 p-1 top-3 right-3">
                <img className='w-4 h-4 flex' src={star} alt="" />4.7</button>
            </figure>
            <div class="card-body">
              <h2 class="card-title">JAVA Backend Development<br />-Live</h2><br />
              <p className=' flex gap-2 text-sm'><img className='w-5 h-5' src={bar} alt="" />Intermediatee and Advance</p>
              <div class=" flex gap-2  justify-between mt-3">
                <p className=' flex justify-start gap-2 text-sm'><img className='w-5' src={grow} alt="" />279k+ interested Geeks</p>
                <button class="w-[80px] text-xs h-5 font-bold text-green-600">Explore now</button>
              </div>
              <div className='mt-3'>
                <button className='bg-yellow-500 text-black rounded-xl text-sm w-[300px] h-9'>Refund of 90% is available on this course</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure className=' relative'>
              <img
                src="https://media.geeksforgeeks.org/img-practice/prod/courses/458/Web/Content/Course_Tech_Int_1720846791_1736594646.webp"
                alt="Shoes" />
              <button className="  absolute flex justify-center gap-1   bg-slate-600 text-white rounded-[30px] text-xs w-12 p-1 top-3 right-3">
                <img className='w-4 h-4 flex' src={star} alt="" />4.9</button>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Tech Interview 101-From<br />DSA to System Design</h2><br />
              <p className=' flex gap-2 text-sm'><img className='w-5' src={bar} alt="" />Beginner to Advance</p>
              <div class=" flex gap-2  justify-between mt-3">
                <p className=' flex justify-start gap-2 text-sm'><img className='w-5' src={grow} alt="" />321k+ interested Geeks</p>
                <button class="w-[80px] text-xs h-5 font-bold text-green-600">Explore now</button>
              </div>
              <div className='mt-3'>
                <button className='bg-yellow-500 text-black rounded-xl text-sm w-[300px] h-9'>Refund of 90% is available on this course</button>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className='flex mt-5 ml-[15%] mr-[15%] px-5 py-5 gap-14 justify-center' >
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure className=' relative'>
              <img
                src="https://media.geeksforgeeks.org/img-practice/prod/courses/662/Web/Content/React_1720781624.webp"
                alt="Shoes" />
              <button className="  absolute flex justify-center gap-1   bg-slate-600 text-white rounded-[30px] text-xs w-12 p-1 top-3 right-3">
                <img className='w-4 h-4 flex' src={star} alt="" />4.7</button>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Full Stack Development with<br />React & Node JS-Live</h2><br />
              <p className=' flex gap-2 text-sm'><img className='w-5 h-5' src={bar} alt="" />Beginner to Advance</p>
              <div class=" flex gap-2  justify-between mt-3">
                <p className=' flex justify-start gap-2 text-sm'><img className='w-5' src={grow} alt="" />279k+ interested Geeks</p>
                <button class="w-[80px] text-xs h-5 font-bold text-green-600">Explore now</button>
              </div>
              <div className='mt-3'>
                <button className='bg-yellow-500 text-black rounded-xl text-sm w-[300px] h-9'>Refund of 90% is available on this course</button>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 w-96 shadow-xl">
            <figure className=' relative'>
              <img
                src="https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/javaprogramming_1736593466.webp"
                alt="Shoes" />
              <button className="  absolute flex justify-center gap-1   bg-slate-600 text-white rounded-[30px] text-xs w-12 p-1 top-3 right-3">
                <img className='w-4 h-4 flex' src={star} alt="" />4.6</button>
            </figure>
            <div class="card-body">
              <h2 class="card-title">JAVA Programming Online<br />Course-Live</h2><br />
              <p className=' flex gap-2 text-sm'><img className='w-5 h-5' src={bar} alt="" />Beginner to Advance</p>
              <div class=" flex gap-2  justify-between mt-3">
                <p className=' flex justify-start gap-2 text-sm'><img className='w-5' src={grow} alt="" />279k+ interested Geeks</p>
                <button class="w-[80px] text-xs h-5 font-bold text-green-600">Explore now</button>
              </div>
              <div className='mt-3'>
                <button className='bg-yellow-500 text-black rounded-xl text-sm w-[300px] h-9'>Refund of 90% is available on this course</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure className=' relative'>
              <img
                src="https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1736593581.webp"
                alt="Shoes" />
              <button className="  absolute flex justify-center gap-1   bg-slate-600 text-white rounded-[30px] text-xs w-12 p-1 top-3 right-3">
                <img className='w-4 h-4 flex' src={star} alt="" />4.7</button>
            </figure>
            <div class="card-body">
              <h2 class="card-title">C++ Programming Online Course</h2><br />
              <p className=' flex gap-2 text-sm'><img className='w-5' src={bar} alt="" />Beginner to Advance</p>
              <div class=" flex gap-2  justify-between mt-3">
                <p className=' flex justify-start gap-2 text-sm'><img className='w-5' src={grow} alt="" />321k+ interested Geeks</p>
                <button class="w-[80px] text-xs h-5 font-bold text-green-600">Explore now</button>
              </div>
              <div className='mt-3'>
                <button className='bg-yellow-500 text-black rounded-xl text-sm w-[300px] h-9'>Refund of 90% is available on this course</button>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------- */}
        {/* <div className='flex mt-5 px-5 py-5 gap-14 justify-center overflow-hidden'>
          <img className=' rounded-xl w-[72%] object-cover transition delay-150 duration-300 ease-in-out hover:scale-110' src={promo} alt="" />
           
        </div> */}
        <div className="flex ml-[15%] mr-[15%] mt-5  gap-14 justify-center overflow-hidden">
          <div className="w-[86%] h-52  rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:scale-110"
              src={promo}
              alt="Promo image"
            />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Course