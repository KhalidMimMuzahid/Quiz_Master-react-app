import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import BlogSideNav from './BlogSideNav/BlogSideNav';

const Blog = () => {
    // const blogQuestions= useLoaderData();
    // console.log(blogQuestions)
    return (
        <div className='grid grid-cols-12'>
            <div className=' col-span-3'>
                <div className='h-screen border border-4 border-t-0 border-r-8 border-black p-4  overflow-y-scroll fixed inset-0 top-[3.8125rem] left-[0px] right-auto w-[25%]'>

                    {/* {
                        blogQuestions.map(blogQuestion=><BlogSideNav
                        key={blogQuestion.id}
                        blogQuestion={blogQuestion}
                        questionNumber={blogQuestions.indexOf(blogQuestion)}
                        ></BlogSideNav>)
                    } */}
                    <Link className='grid border border-black m-4 hover:bg-slate-500 p-4 font-bold' to="/blog/1"><span>Q1:What is the purpose of react-router ?</span> </Link>
                    <Link className='grid border border-black m-4 hover:bg-slate-500 p-4 font-bold' to="/blog/2"><span>Q2:How does context API work..?</span> </Link>
                    <Link className='grid border border-black m-4 hover:bg-slate-500 p-4 font-bold' to="/blog/3"><span>Q3:What is useRef() hooks in react .?</span> </Link>
                </div>
            </div>
            <div className='col-span-9'>
                <div className='border border-black m-4 p-2'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Blog;