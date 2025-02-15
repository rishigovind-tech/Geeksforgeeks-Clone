import React from 'react'
import bell from "../components/assets/bell.png"
import search from "../components/assets/search.png"
import translte from "../components/assets/translation.png"
import dark from "../components/assets/dark-mode.png"





function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start order-2  flex justify-between mr-[330px] ">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Courses</a>
                <ul className="p-2">
                  <li><a>DSA to Developments</a></li>
                  <li><a>GATE Courses</a></li>
                  <li><a>Get IBM Certification</a></li>
                  <li><a>Full Stack Developnment</a></li>
                  <li><a>Data Science Program</a></li>
                </ul>
              </li>
              <li>
                <a>Tutorials</a>
                <ul className="p-2">
                  <li><a>DSA to Developments</a></li>
                  <li><a>GATE Courses</a></li>
                  <li><a>Get IBM Certification</a></li>
                  <li><a>Full Stack Developnment</a></li>
                  <li><a>Data Science Program</a></li>
                </ul>
              </li>
              <li>
                <a>Jobs</a>
                <ul className="p-2">
                  <li><a>Get Hired:Apply for Jobs</a></li>
                  <li><a>Corporate Hiring Solutions</a></li>
                  <li><a>Employer Branding</a></li>
                  <li><a>All Job Updates</a></li>
                </ul>
              </li>
              <li>
                <a>Pratice</a>
                <ul className="p-2">
                <li><a>Problem of the Day</a></li>
                  <li><a>Practice Coding Problems</a></li>
                  <li><a>GfG SDE Sheet</a></li>
                </ul>
              </li>
              <li>
                <a>Contest</a>
                <ul className="p-2">
                <li><a>GfG Weekly</a></li>
                  <li><a>Job-A-Thon Hiring Challenge</a></li>
                  <li><a>All Contest and Events</a></li>
                </ul>
              </li>

            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">
            <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="" className="h-10 w-auto"/>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <details className=''>
                <summary>Courses</summary>
                <ul className="p-2 " style={{ width: "250px" }}>
                  <li><a>DSA to Developments</a></li>
                  <li><a>GATE Courses</a></li>
                  <li><a>Get IBM Certification</a></li>
                  <li><a>Full Stack Developnment</a></li>
                  <li><a>Data Science Program</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className=''>
                <summary>Tutorials</summary>
                <ul className="p-2 " style={{ width: "250px" }}>
                  <li><a>DSA to Developments</a></li>
                  <li><a>Data Structure & Algorithms</a></li>
                  <li><a>ML & Data Science</a></li>
                  <li><a>Interview Corner</a></li>
                  <li><a>Languages</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className=''>
                <summary>Jobs</summary>
                <ul className="p-2 " style={{ width: "250px" }}>
                  <li><a>Get Hired:Apply for Jobs</a></li>
                  <li><a>Corporate Hiring Solutions</a></li>
                  <li><a>Employer Branding</a></li>
                  <li><a>All Job Updates</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className=''>
                <summary>Pratice</summary>
                <ul className="p-2 " style={{ width: "250px" }}>
                  <li><a>Problem of the Day</a></li>
                  <li><a>Practice Coding Problems</a></li>
                  <li><a>GfG SDE Sheet</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className=''>
                <summary>Contest</summary>
                <ul className="p-2 " style={{ width: "250px" }}>
                  <li><a>GfG Weekly</a></li>
                  <li><a>Job-A-Thon Hiring Challenge</a></li>
                  <li><a>All Contest and Events</a></li>
                </ul>
              </details>
            </li>


          </ul>
        </div>
        <div className="navbar-end order-3 flex gap-4">
          
          <img className='w-5' src={search} alt="" />
          <img className='w-5' src={dark} alt="" />
          <img className='w-8' src={bell} alt="" />
          <img className='w-5' src={translte} alt="" />
          <a className="btn">Sign In</a>
        </div>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className="max-w-fit text-sm overflow-x-auto whitespace-nowrap scrollbar-hide " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <ul className="flex gap-8 p-2 ">
          <a href="" className=" hover:text-green-600 ">
            <li>Trending Now</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>DSA</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Web Tech</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Foundation Courses</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Data Science</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Practice Problem</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Python</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Machine Learning</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>JavaScript</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>System Design</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Django</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>DevOps Tutorial</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Java</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>C</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>C++</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>ReactJS</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>NodeJS</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>CP Live</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Aptitude</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Puzzles</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Project</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>MongoDB</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>Linux</li>
          </a>
          <a href="" className=" hover:text-green-600">
            <li>AWS</li>
          </a>
          
          
        </ul>
      </div>

    </div>
  )
}

export default Navbar



