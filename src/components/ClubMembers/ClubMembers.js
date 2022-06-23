import React from 'react';
import './ClubMembers.css';
const ClubMembers = () => {
    return (
        <section className='py-20'>
            <div className='w-full md:w-3/4 mx-auto py-20 text-white text-center clubMemberBg'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12 md:col-span-4  place-self-center space-y-5'>
                        <div className='w-20 h-20 rounded-full bg-red-500 flex justify-center items-center'><i className="fa-solid fa-people-line scale-150"></i></div>
                        <h1 className='text-3xl md:text-5xl kdamthmorFont'>40</h1>
                        <h1 className='staatlichesFont'>Expert Team</h1>
                    </div>
                    <div className='col-span-12 md:col-span-4  place-self-center space-y-5'>
                        <div className='w-20 h-20 rounded-full bg-red-500 flex justify-center items-center'><i className="fa-solid fa-medal scale-150"></i></div>
                        <h1 className='text-3xl md:text-5xl kdamthmorFont'>39</h1>
                        <h1 className='staatlichesFont'>Experience</h1>
                    </div>
                    <div className='col-span-12 md:col-span-4  place-self-center space-y-5'>
                        <div className='w-20 h-20 rounded-full bg-red-500 flex justify-center items-center'><i className="fa-solid fa-people-group scale-150"></i></div>
                        <h1 className='text-3xl md:text-5xl kdamthmorFont'>500</h1>
                        <h1 className='staatlichesFont'>Club Members</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClubMembers;