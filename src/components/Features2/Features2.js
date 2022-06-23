import React from 'react';

const Features2 = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='bg-white w-1/3 p-10' >
                <div>
                    <div className='flex'>
                        <div className='bg-red-500 h-12 w-12 rounded-full mr-3'></div>
                        <div className=''>
                            <h1 className='text-2xl'>Proffesional</h1>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                        </div>

                    </div>
                    <hr className='m-5' />
                    <div className='flex justify-between'>
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div>
                            <button className='border px-6 py-3'>learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features2;