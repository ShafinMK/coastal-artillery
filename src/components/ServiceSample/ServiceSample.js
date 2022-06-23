import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSample = () => {
    return (
        <div className=''>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className='text-center text-white pb-10'>
                        <h1 className='text-3xl md:text-5xl staatlichesFont font-bold'>We Provide the Best Training</h1>
                        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, iste.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="bg-transparent p-6 rounded-lg h-96 shadow-sm shadow-black  hover:shadow-black  duration-1000 hover:shadow-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images5.alphacoders.com/322/thumb-1920-322185.jpg" alt="content" />
                                <h3 className="tracking-widest text-red-500 text-2xl font-medium koulenFont text-center">Home Firearm Safety Courses</h3>

                                <p className="leading-relaxed text-base text-center text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero dolorum cum ad, labore aspernatur?.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-transparent p-6 rounded-lg h-96 shadow-sm shadow-black  hover:shadow-black  duration-1000 hover:shadow-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images4.alphacoders.com/539/thumb-1920-53956.jpg" alt="content" />
                                <h3 className="tracking-widest text-red-500 text-2xl font-medium koulenFont text-center">Pistol Courses</h3>

                                <p className="leading-relaxed text-base text-center text-slate-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, magnam. Consectetur laboriosam</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="bg-transparent p-6 rounded-lg h-96 shadow-sm shadow-black  hover:shadow-black  duration-1000 hover:shadow-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images5.alphacoders.com/637/thumb-1920-637452.jpg" alt="content" />
                                <h3 className="tracking-widest text-red-500 text-2xl font-medium koulenFont text-center">Rifle Training Courses</h3>

                                <p className="leading-relaxed text-base text-center text-slate-300">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-transparent p-6 rounded-lg h-96 shadow-sm shadow-black  hover:shadow-black  duration-1000 hover:shadow-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1533091917107-98f819e4cb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="content" />
                                <h3 className="tracking-widest text-red-500 text-2xl font-medium koulenFont text-center">Personal Protection Courses</h3>

                                <p className="leading-relaxed text-base text-center text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ullam est natus nemo optio quo..</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center p-5'>
                        <Link to='/courses'>
                            <button className='bg-black ring-2 ring-red-600 text-white py-4 px-8 hover:shadow-lg hover:shadow-black duration-300'>More Courses</button>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceSample;