import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        
        <header className=" body-font text-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <div className='text-sm lg:text-4xl lobstarFont text-white'>Coastal <br /><span className='text-red-500'>Artillery</span></div>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to='/home' className={({isActive}) => isActive?'text-red-500':'text-white'}><span className='mr-5 hover:text-red-500 duration-500 cursor-pointer'>Home</span></NavLink>
                    <NavLink to='/courses' className={({isActive}) => isActive?'text-red-500':'text-white'}><span className='mr-5 hover:text-red-500 duration-500 cursor-pointer'>Courses</span></NavLink>
                    <NavLink to='/gallery' className={({isActive}) => isActive?'text-red-500':'text-white'}><span className='mr-5 hover:text-red-500 duration-500 cursor-pointer'>Gallery</span></NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive?'text-red-500':'text-white'}><span className='mr-5 hover:text-red-500 duration-500 cursor-pointer'>About</span></NavLink>
                    {/* <a className="mr-5 hover:text-red-500 duration-500 cursor-pointer">Home</a>
                    <a className="mr-5 hover:text-red-500 duration-500 cursor-pointer">Courses</a>
                    <a className="mr-5 hover:text-red-500 duration-500 cursor-pointer">Gallery</a>
                    <a className="mr-5 hover:text-red-500 duration-500 cursor-pointer">About</a> */}
                </nav>
                <Link to='/signup'><button className="inline-flex items-center bg-transparent ring-2 ring-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black duration-700 rounded text-base mt-4 md:mt-0">Sign up</button></Link>
                
            </div>
        </header>
    );
};

export default Header;