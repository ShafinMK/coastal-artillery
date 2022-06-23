import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>


            <footer className="bg-black flex flex-col md:flex-row justify-between items-center p-10 mt-20 text-white">
                <div className='text-center md:text-left'>

                    <h1 className='text-3xl font-bold inline mr-5 lobstarFont'>Coastal <span className='text-red-500'>Artillery</span></h1>
                    {/* <span className='p-5 border-l-2'>All rights reserved by &copy; Shafin</span> */}
                    <h1 className='p-5 md:border-l-2 md:inline'>All rights reserved by &copy; Shafin</h1>
                </div>

                <div className='text-center text-white space-x-4'>
                    <div className='inline-block  bg-blue-700 w-7 h-7 rounded-full'><i className="fa-brands fa-facebook-f"></i></div>
                    <div className='inline-block  bg-pink-500 w-7 h-7 rounded-full'><i className="fa-brands fa-instagram"></i></div>
                    <div className='inline-block  bg-red-500 w-7 h-7 rounded-full'><i className="fa-brands fa-youtube"></i></div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;