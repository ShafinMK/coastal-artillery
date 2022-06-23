import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className=''>
            <div className='w-3/4 mx-auto py-40'>
            <div className="grid grid-cols-12 gap-4">

                <div className='col-span-12 lg:col-span-6'>
                    <div className='grid grid-cols-12 gap-4'>
                        <img src="https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className='col-span-6' alt="" />
                        <img src="https://images3.alphacoders.com/223/thumb-1920-223445.jpg" className='col-span-6 border-8 border-red-600' alt="" />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6 text-white flex justify-center items-center'>
                    <div className='w-full lg:w-2/3 space-y-8'>
                        <h1 className='text-3xl md:text-5xl text-center lg:text-left  font-bold koulenFont '>We are The Best <br /> Shooting Club</h1>
                        <p className='text-center lg:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ex maxime fuga consequatur. Deleniti, similique, voluptate eveniet incidunt cumque architecto esse a cupiditate facere, molestias deserunt vitae excepturi impedit repellat?</p>
                        <div className='flex justify-center lg:justify-start'>
                            
                            <Link to = '/about'><button className='bg-red-600 hover:shadow-lg hover:shadow-black duration-500 px-8 py-4'>Learn More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default AboutUs;