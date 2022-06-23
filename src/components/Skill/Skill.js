import React from 'react';
import { Link } from 'react-router-dom';
import './Skill.css';
const Skill = () => {
    return (
        <section className='py-20 skillBg'>
            <div className='w-3/4 mx-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {/* text section  */}
                    <div className='text-white flex justify-center items-center'>
                        <div className='w-full lg:w-2/3 space-y-8'>
                            <h1 className='text-3xl md:text-5xl text-center lg:text-left  font-bold staatlichesFont'>Best Skill of <br />Costal Artilary</h1>
                            <p className='text-center lg:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ex maxime fuga consequatur. Deleniti, similique, voluptate eveniet incidunt cumque architecto esse a cupiditate facere, molestias deserunt vitae excepturi impedit repellat?</p>
                            <div className='flex justify-center lg:justify-start'>
                                
                                <Link to='/courses'><button className='bg-red-600 hover:bg-orange-600 px-8 py-4 my-10 hover:shadow-lg hover:shadow-black duration-500'>Learn More</button></Link>
                            </div>
                        </div>
                    </div>

                    {/* percentage show section  */}
                    <div className='flex flex-col justify-center space-y-10'>
                        <div>
                            <div className='flex justify-between text-white staatlichesFont'>
                                <h1 className=''>Professional Course</h1>
                                <h1 className='px-5'>90%</h1>
                            </div>
                            <div className='bg-white h-1  w-full'>
                                <div className='bg-red-600 h-1 w-11/12'></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between text-white staatlichesFont'>
                                <h1 className=''>Flexible Schedule</h1>
                                <h1 className='px-5'>90%</h1>
                            </div>
                            <div className='bg-white h-1  w-full'>
                                <div className='bg-red-600 h-1 w-11/12'></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between text-white staatlichesFont'>
                                <h1 className=''>Top Facilities</h1>
                                <h1 className='px-5'>90%</h1>
                            </div>
                            <div className='bg-white h-1  w-full'>
                                <div className='bg-red-600 h-1 w-11/12'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;