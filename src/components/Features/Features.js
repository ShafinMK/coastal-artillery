import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className=' py-20 '>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-3/4 lg:w-11/12 mx-auto '>
                {/* card 1 */}
                <div className='grid grid-cols-12 gap-4  p-10 w-auto  text-center lg:text-left bg-white shadow-lg hover:shadow-2xl hover:scale-105 shadow-black duration-700'>

                    <div className='col-span-12 lg:col-span-2 h-10 w-10 bg-red-500 place-self-center flex justify-center items-center'><i className="fa-solid fa-user-ninja text-white scale-125"></i></div>
                    <div className='col-span-12 lg:col-span-10 '>
                        <h1 className='text-2xl pb-3 font-bold koulenFont tracking-widest'>Proffesional</h1>
                        <p>Professional Certified Course</p>
                    </div>
                    <hr className='col-span-12 mt-5' />
                    <div className='col-span-12 lg:col-span-6 lg pt-5'>
                        <i className="fa-solid fa-star text-orange-300"></i>
                        <i className="fa-solid fa-star text-orange-300"></i>
                        <i className="fa-solid fa-star text-orange-300"></i>
                        <i className="fa-solid fa-star text-orange-300"></i>
                        <i className="fa-solid fa-star text-orange-300"></i>
                    </div>
                    <div className='col-span-12 lg:col-span-6 pt-5 flex justify-center lg:justify-end '>
                    
                        <Link to ='/about'><button className=' border px-3 py-2 rounded ring ring-1 ring-black'>Learn more<i className="fa-solid fa-arrow-right ml-2"></i></button></Link>
                    </div>
                </div>


                {/* card 2 */}
                <div className='grid grid-cols-12 gap-4 p-10  text-center lg:text-left bg-red-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 shadow-black duration-700'>

                    <div className='col-span-12 lg:col-span-2 h-10 w-10 bg-white place-self-center flex justify-center items-center'><i className="fa-solid fa-handshake-angle text-red-600 scale-125"></i></div>
                    <div className='col-span-12 lg:col-span-10'>
                        <h1 className='text-2xl pb-3 font-bold koulenFont tracking-widest'>Trusted</h1>
                        <p>Most Trusted Since 1997</p>
                    </div>
                    <hr className='col-span-12 mt-5' />
                    <div className='col-span-12 lg:col-span-6 lg pt-5'>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                    </div>
                    <div className='col-span-12 lg:col-span-6 pt-5 flex justify-center lg:justify-end '>
                        
                        <Link to ='/about'><button className=' border px-3 py-2 rounded ring ring-1 ring-white'>Learn more<i className="fa-solid fa-arrow-right ml-2"></i></button></Link>
                    </div>
                </div>


                {/* card 3 */}
                <div className='grid grid-cols-12 gap-4 p-10  text-center lg:text-left bg-gray-900 text-white shadow-lg hover:shadow-2xl hover:border border-black hover:scale-105 shadow-black duration-700'>

                    <div className='col-span-12 lg:col-span-2 h-10 w-10 bg-red-500 place-self-center flex justify-center items-center'><i className="fa-solid  fa-hand-holding-dollar text-white scale-125"></i></div>
                    <div className='col-span-12 lg:col-span-10 '>
                        <h1 className='text-2xl pb-3 font-bold koulenFont tracking-widest'>Affordable</h1>
                        <p>All Course at affordable price</p>
                    </div>
                    <hr className='col-span-12 mt-5' />
                    <div className='col-span-12 lg:col-span-6 lg pt-5'>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                    </div>
                    <div className='col-span-12 lg:col-span-6 pt-5 flex justify-center lg:justify-end '>
                        
                        <Link to ='/about'><button className=' border px-3 py-2 rounded ring ring-1 ring-black'>Learn more<i className="fa-solid fa-arrow-right ml-2"></i></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;