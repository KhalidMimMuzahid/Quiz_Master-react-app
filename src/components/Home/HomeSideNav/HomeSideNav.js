import React from 'react';
import { Link } from 'react-router-dom';

const HomeSideNav = ({topic}) => {
    return (
        <div className='border border-black p-4 m-4'>
            <div className='w-full bg-slate-600'>
                <img src={topic.logo} alt="" />
            </div>
            <div>
                <h2>name: {topic.name}</h2>
                <h3>total question: {topic.total}</h3>
                <Link  className='block border border-black border-2 bg-gray-900 text-white  w-full hover:bg-slate-500' to={`/home/${topic.id}`}>Start Quiz</Link>
                </div>
        </div>
    );
};

export default HomeSideNav;