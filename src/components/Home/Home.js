import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import HomeSideNav from './HomeSideNav/HomeSideNav';

const Home = () => {
    const topicsLoad= useLoaderData();
    // console.log(topicsLoad)
    const{data}= topicsLoad;
    // console.log(data)
    return (
        <div className='grid grid-cols-12'>
            <div className=' col-span-3'>
                <div className='h-screen border border-4 border-t-0 border-r-8 border-black p-4 pb-[100px]  overflow-y-scroll fixed inset-0 top-[3.8125rem] left-[0px] right-auto w-[25%]'>
                    {
                        data.map(topic => <HomeSideNav
                            key={topic.id}
                            topic={topic}
                        ></HomeSideNav>)
                    }
                </div>
            </div>
            <div className='col-span-9'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;