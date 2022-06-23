import React from 'react';

const Gallery = () => {
    return (
        <div className='w-3/4 mx-auto'>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap justify-center">
                        <h1 className='text-center text-white text-5xl'>Join Our Club</h1>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-full lg:w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1599397976795-4f638f02a5ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/6091292/pexels-photo-6091292.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/6091851/pexels-photo-6091851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full lg:w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/5202377/pexels-photo-5202377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/5202380/pexels-photo-5202380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://cdn.pixabay.com/photo/2021/10/24/19/24/sniper-6739064_960_720.jpg" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default Gallery;