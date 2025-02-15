import React from 'react'
import loc from "../components/assets/location.png"
import fb from "../components/assets/fb.png"
import x from "../components/assets/x.png"
import yt from "../components/assets/yt.png"
import insta from "../components/assets/insta.png"
import ind from "../components/assets/in.png"

const Footer = () => {
  return (
    <div className=' bg-gray-800'>
      <div className='flex bg-gray-800 p-2 '>
        <div className='bg-gray-800'>
          <img className='w-[400px] p-8' src="https://media.geeksforgeeks.org/auth-dashboard-uploads/gfgFooterLogoDark.png" alt="" />
          <div >
            <p className='flex gap-1 px-3 font-bold'><img className='w-6 h-6 ' src={loc} alt="" />Corporate & Communications Address:</p>
            <div>
              <p className=' text-left ml-10 mt-2'>A-143, 7th Floor,<br />Sovereign Corporate Tower,Sector- 136,<br />Noida,Uttar Pradesh (201305)</p>
            </div>
          </div>
          <div className='mt-4' >
            <p className='flex gap-1 px-3 font-bold'><img className='w-6 h-6 ' src={loc} alt="" />Registered Address:</p>
            <div>
              <p className=' text-left ml-10 mt-2'>K 061, Tower K,<br />Sovereign Corporate Tower,Sector- 136,<br />Noida,Uttar Pradesh (201305)</p>
            </div>
          </div>
          <div className=' flex mt-4 ml-7 gap-4  '>
            <button className='w-10 h-10 rounded-full border-collapse bg-gray-900  hover:bg-blue-500'><img className=' w-5 h-5 ml-[10px] ' src={fb} alt="" /></button>
            <button className='w-10 h-10 rounded-full border-collapse bg-gray-900  hover:bg-rose-500'><img className=' w-5 h-5 ml-[11px] ' src={insta} alt="" /></button>
            <button className='w-10 h-10 rounded-full border-collapse bg-gray-900  hover:bg-black'><img className=' w-5 h-5 ml-[11px] ' src={x} alt="" /></button>
            <button className='w-10 h-10 rounded-full border-collapse bg-gray-900  hover:bg-blue-900'><img className=' w-5 h-5 ml-[11px] ' src={ind} alt="" /></button>
            <button className='w-10 h-10 rounded-full border-collapse bg-gray-900  hover:bg-red-600'><img className=' w-4 h-4 ml-[11px] ' src={yt} alt="" /></button>
          </div>
          <div className=' flex gap-3  justify-center mt-7 mr-4'>
            <img className=' rounded-[10px] w-[130px]' src="https://media.geeksforgeeks.org/auth-dashboard-uploads/googleplay-%281%29.png" alt="" />
            <img className=' rounded-[10px] w-[130px]' src="https://media.geeksforgeeks.org/auth-dashboard-uploads/appstore-%281%29.png" alt="" />
          </div>
          <div className='flex justify-center mt-7 mb-4'>
          <button className='bg-blue-600 text-white rounded-xl text-sm w-[250px] h-12 flex justify-center items-center font-bold'>Advertise with us</button>
          </div>
          
        </div>
        
        
        <footer className="footer bg-gray-800 text-neutral-content grid-rows-1 p-6">
          <nav>
            <h6 className="footer-title text-green-600 text-xl">Company</h6>
            <a className="link link-hover text-lg">About</a>
            <a className="link link-hover  text-lg">Legal</a>
            <a className="link link-hover  text-lg">Privacy Policy</a>
            <a className="link link-hover  text-lg">Careers</a>
            <a className="link link-hover  text-lg">In Media</a>
            <a className="link link-hover  text-lg">Contact Us</a>
            <a className="link link-hover  text-lg">GFG Corporate</a>
            <a className="link link-hover  text-lg">Solution</a>
            <a className="link link-hover  text-lg">Placement Training</a>
            <a className="link link-hover  text-lg">Program</a>
          </nav>
          
          <nav>
            <h6 className="footer-title text-green-600 text-xl">Explore</h6>
            <a className="link link-hover  text-lg">Job-A-Thon Hiring</a>
            <a className="link link-hover  text-lg">Challenge</a>
            <a className="link link-hover  text-lg">Hack-A-Thon</a>
            <a className="link link-hover  text-lg">GFG Weekly Contest</a>
            <a className="link link-hover  text-lg">Offline Classes</a>
            <a className="link link-hover  text-lg">DSA in JAVA/C++</a>
            <a className="link link-hover  text-lg">Master System Design</a>
            <a className="link link-hover  text-lg">Master CP</a>

          </nav>
          
         
          <nav>
            <h6 className="footer-title text-green-600 text-xl">Languages</h6>
            <a className="link link-hover  text-lg">Python</a>
            <a className="link link-hover  text-lg">Java</a>
            <a className="link link-hover  text-lg">C++</a>
            <a className="link link-hover  text-lg">PHP</a>
            <a className="link link-hover  text-lg">GoLang</a>
            <a className="link link-hover  text-lg">SQL</a>
            <a className="link link-hover  text-lg">R Language</a>
            <a className="link link-hover  text-lg">Android Tutorial</a>

          </nav>
          
          <nav>
            <h6 className="footer-title text-green-600 text-xl">DSA</h6>
            <a className="link link-hover  text-lg">Data Structure</a>
            <a className="link link-hover  text-lg">Algorithms</a>
            <a className="link link-hover  text-lg">DSA for Beginners</a>
            <a className="link link-hover  text-lg">Basic DSA Problems</a>
            <a className="link link-hover  text-lg">DSA Roadmap</a>
            <a className="link link-hover  text-lg">DSA Interview</a>
            <a className="link link-hover  text-lg">Question</a>
            <a className="link link-hover  text-lg">Competitive</a>
            <a className="link link-hover  text-lg">Programming</a>

          </nav>
         
          <nav>
            <h6 className="footer-title text-green-600 text-xl">Data Science & ML</h6>
            <a className="link link-hover  text-lg">Data Science with Python</a>
            <a className="link link-hover  text-lg">Data Science for Beginner</a>
            <a className="link link-hover  text-lg">Machine Learning</a>
            <a className="link link-hover  text-lg">ML Maths</a>
            <a className="link link-hover  text-lg">Data Visualisation</a>
            <a className="link link-hover  text-lg">Pandas</a>
            <a className="link link-hover  text-lg">NumPy</a>
            <a className="link link-hover  text-lg">NLP</a>


          </nav>
          <nav>
            <h6 className="footer-title text-green-600 text-xl">Social</h6>
            <a className="link link-hover  text-lg">Twitter</a>
            <a className="link link-hover  text-lg">Instagram</a>
            <a className="link link-hover  text-lg">Facebook</a>
            <a className="link link-hover  text-lg">GitHub</a>
          </nav>
          <nav>
            <h6 className="footer-title text-green-600 text-xl">Web Tecnologies</h6>
            <a className="link link-hover  text-lg">HTML</a>
            <a className="link link-hover  text-lg">CSS</a>
            <a className="link link-hover  text-lg">JavaScript</a>
            <a className="link link-hover  text-lg">ReactJS</a>
            <a className="link link-hover  text-lg">NextJS</a>
            <a className="link link-hover  text-lg">NodeJS</a>
            <a className="link link-hover  text-lg">Bootstrap</a>
            <a className="link link-hover  text-lg">Tailwind CSS</a>


          </nav>
          <nav>
            <h6 className="footer-title text-green-600 text-xl">Apps</h6>
            <a className="link link-hover  text-lg">Mac</a>
            <a className="link link-hover  text-lg">Windows</a>
            <a className="link link-hover  text-lg">iPhone</a>
            <a className="link link-hover  text-lg">Android</a>
          </nav>
        </footer>
      </div>
      <div className='flex justify-center p-4 border-t border-black'>
          <p>@GeeksforGeeks, Sanchhaya Education Private Limited, All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer