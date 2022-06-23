import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const{courseFee, courseName, courseThumb, id, moreDetails, shortDescription} = props.course;

    let url = `/course/${id}`;
    return (
        <div>
            {/* card start */}
            <div className='w-auto  bg-gray-800 p-1  rounded-md  hover:scale-105 duration-500 shadow-md shadow-black hover:shadow-lg hover:shadow-black'>
                {/* card image  */}
                <img src={courseThumb} className='rounded-md lg:h-60 md:h-36 w-full object-cover object-center' alt="" />
                {/* card-body  */}
                <div className='space-y-2 '>
                    <h1 className='text-2xl text-center item-name font-semibold mt-3 h-20 p-5 breeSerifFont text-white'>{courseName}</h1>
                    <h2 className='text-center text-green-400 italic'>${courseFee}</h2>
                    <h3 className='text-center p-3 text-slate-400 italic h-20 text-ellipsis overflow-hidden'>{shortDescription}</h3>

                </div>
                <div className='flex justify-center m-3'>
                    <Link to={url}><button className='bg-red-500 px-8 py-1 rounded italic hover:bg-red-600 duration-500 text-white ring-2 ring-red-500'>Details</button></Link>

                </div>
                
            </div>
            {/* card end */}
        </div>
    );
};

export default Course;