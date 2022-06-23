import React from 'react';
import './ExpertTeam.css';
const ExpertTeam = () => {
    return (
        <section className='py-20'>
            <div className='w-full md:w-3/4 mx-auto'>
                <div className='text-center text-white space-y-5 mb-5'>
                    <h1 className='text-3xl md:text-5xl staatlichesFont'>Expert Shooter</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At doloremque inventore fuga cum necessitatibus, placeat odio quaerat dolores explicabo nisi.</p>
                </div>

                {/* <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4'>
                    <img src="https://images.pexels.com/photos/6091611/pexels-photo-6091611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    <img src="https://images.pexels.com/photos/6090884/pexels-photo-6090884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img src="https://images.pexels.com/photos/6090875/pexels-photo-6090875.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div> */}

                

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4'>
                    <div className="card relative">
                        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url(https://images.pexels.com/photos/6091611/pexels-photo-6091611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
                        <div className="opacity-0 hover:opacity-100 bg-gradient-to-t from-red-500 duration-700 absolute inset-0 z-10 flex justify-center items-center text-5xl text-white font-semibold p-5 staatlichesFont">Sage</div>
                    </div>
                    <div className="card relative">
                        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url(https://images.pexels.com/photos/6090884/pexels-photo-6090884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
                        <div className="opacity-0 hover:opacity-100 bg-gradient-to-t from-red-500 duration-700 absolute inset-0 z-10 flex justify-center items-center text-5xl text-white font-semibold staatlichesFont">Jett</div>
                    </div>
                    <div className="card relative">
                        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url(https://images.pexels.com/photos/6091600/pexels-photo-6091600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}></div>
                        <div className="opacity-0 hover:opacity-100 bg-gradient-to-t from-red-500 duration-700 absolute inset-0 z-10 flex justify-center items-center text-5xl text-white font-semibold staatlichesFont">Phonix</div>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default ExpertTeam;