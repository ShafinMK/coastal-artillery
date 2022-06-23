import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const[courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://shafinmk.github.io/resources-api/coastal-artillery-1-api.json')
        .then(res => res.json())
        .then(data => setCourses(data))
        .catch(error=> console.log(error))
    }, []);
    // console.log(courses);
    return (
        <div className='w-full md:w-3/4 lg:w-1/2 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                // courses? courses.map(course => <Course course ={course}></Course> :
                //  console.log('not found')
                courses.map(course => <Course key = {course.id} course ={course}></Course>)
            }
            </div>
            
        </div>
    );
};

export default Courses;