import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
    <nav className="container mx-auto flex items-center justify-between py-3">
     <div className="flex items-center flex-shrink-0 text-white">
      <h1 className='text-5xl text-[#FFB967] font-bold'>Ekid<span className='text-[#21752C]'>Waste</span></h1>
     </div>
      <div className="block lg:hidden">
       <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
      >
        <svg
          className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
        </button>
      </div>
      <div className={`block lg:flex ${isOpen ? "block" : "hidden"}`}>
        <div className="lg:flex-grow ms-[20px]">
         <NavLink className="block mt-4 lg:inline-block lg:mt-0 mr-8 text-xl font-medium">
          Home
         </NavLink>
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 mr-8 text-xl font-medium">
            About Us
          </NavLink>
          <NavLink className="block mt-4 lg:inline-block lg:mt-0 mr-8 text-xl font-medium">
           Services
          </NavLink>
          <NavLink className="block mt-4 lg:inline-block lg:mt-1  mr-8 font-medium text-xl">
            Blog
          </NavLink>
        </div>
      </div>
      <div>
       <button className="bg-[#21752C] font-normal p-3 rounded-lg text-white text-lg inline-flex items-center">
       <Link to='/form'>Request Pickup</Link>
       </button>
       </div>
    </nav>
  
 );
}

export default Navbar