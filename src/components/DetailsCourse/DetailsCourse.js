import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsCourse = () => {
    const { courseID } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://shafinmk.github.io/resources-api/coastal-artillery-1-api.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.log(error))
    }, [])

    const found = courses.find(crs => crs.id === parseInt(courseID));
    console.log(found);

    // const { courseFee, courseName, courseThumb, id, moreDetails, shortDescription } = found;




    return (
        <div>
            {/* <p className='text-white'> a Course Details {courseID}</p> */}
            <div className='w-full md:w-3/4 mx-auto flex flex-col lg:flex-row'>
                <img src={found?.courseThumb} className='w-full lg:w-1/2 p-5 object-cover object-center' alt="" />
                <div className='text-white p-5 space-y-10'>
                    <h1 className='bg-red-500 text-center text-4xl p-3 breeSerifFont'>{found?.courseName}</h1>
                    <p className='text-justify'>{found?.shortDescription}</p>
                    <h1 className='text-4xl text-green-500 breeSerifFont'>${found?.courseFee}</h1>
                    <h1 className='bg-red-500 text-center text-4xl p-3 breeSerifFont'>Details</h1>
                    <p className='text-justify'>{found?.moreDetails}</p>
                </div>

            </div>

        </div>
    );
};

export default DetailsCourse;