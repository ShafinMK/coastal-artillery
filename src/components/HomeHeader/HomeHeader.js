import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';
const HomeHeader = () => {
    return (
        <div>
            
            <div className='back-image flex justify-center items-center'>
                
                <div className='text-white text-center w-full md:w-2/4 p-5'>
                    <h1 className='text-2xl md:text-6xl  py-10 font-bold staatlichesFont tracking-wide'>Shooting is all about confidence.</h1>
                    <p className='py-5'>The Costal Artillery is recognized nationally as the gold standard for safe firearm training, developing millions of safe, ethical, responsible shooters and instructors. Whether you're a new gun owner in search of training, or an experienced marksman looking to support others, the Costal Artillery has a course for you.</p>
                    
                    <Link to ='/courses'><button className='bg-red-600 px-6 py-3  hover:shadow-lg duration-500 hover:shadow-black'>Learn More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;