import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
      };
    return (
        <nav className='grid grid-cols-12 bg-slate-900 text-white p-5 sticky top-0 left-0 right-0'>
            <div className='col-span-4 '>
                <h1>Quiz_Master</h1>
            </div>
            <div className='col-span-8'>
                <NavLink to="/home" className="mr-6 p-5 font-bold hover:bg-slate-500" >Home</NavLink>
                {/* <NavLink to="/home" className={`mr-6 p-5 font-bold hover:bg-slate-500 ${({ isActive }) =>
              isActive ? "bg-green-600" : undefined
            }`}
            >Home</NavLink> */}
                <NavLink to="/blog" className='p-5 font-bold hover:bg-slate-500'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;