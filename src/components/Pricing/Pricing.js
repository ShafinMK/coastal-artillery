import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <section className='py-20 bg-black'>
            <div className='w-10/12 xl:w-3/4 mx-auto h-5/6  text-white'>

                <div className='grid grid-cols-12 gap-y-5 grid-rows-1 place-items-center'>
                    <div className='col-span-12 lg:col-span-4 space-y-5 p-5'>
                        <h1 className='text-2xl md:text-4xl font-bold text-center lg:text-left staatlichesFont'>We Provide <br /> <span className='text-green-400'>Best Pricing</span></h1>
                        <p className='text-center lg:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit necessitatibus quisquam quis voluptatem ipsam. Sequi excepturi hic earum cum tenetur consectetur reprehenderit iusto, deserunt velit. Temporibus omnis a quas cumque.</p>
                    </div>



                    <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-gray-800 text-center space-y-5 py-10 px-5  xl:px-20'>
                        <h3 className='text-2xl md:text-4xl staatlichesFont'>Premium</h3>
                        <h1 className='text-3xl md:text-5xl text-red-600'>$90<span className='text-sm text-white'>/month</span></h1>
                        <h4>Lorem, ipsum dolor.</h4>
                        <hr />
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <hr />
                        <h4>Lorem ipsum dolor sit.</h4>
                        <hr />
                        <h4>Lorem, ipsum.</h4>
                        <hr />

                        
                        <Link to='/comingsoon'><button className='bg-red-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-black duration-500 px-8 py-4 mt-5'>Get Started</button></Link>
                    </div>


                    <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-gray-800 text-center space-y-5 py-10 px-5 xl:px-20'>
                        <h3 className='text-2xl md:text-4xl staatlichesFont'>Standard</h3>
                        <h1 className='text-3xl md:text-5xl text-red-600'>$65<span className='text-sm text-white'>/month</span></h1>
                        <h4>Lorem, ipsum dolor.</h4>
                        <hr />
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <hr />
                        <h4>Lorem ipsum dolor sit.</h4>
                        <hr />


                        <Link to='/comingsoon'><button className='bg-red-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-black duration-500 px-8 py-4 mt-5'>Get Started</button></Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;