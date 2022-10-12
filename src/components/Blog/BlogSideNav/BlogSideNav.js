import React from 'react';
import { Link } from 'react-router-dom';

const BlogSideNav = ({blogQuestion,questionNumber}) => {
    const quesNo=questionNumber+1;
    return (
            <Link className='grid border border-black m-4 hover:bg-slate-500 p-4 font-bold' to={`/blog/${blogQuestion.id}`}><span>Q{quesNo}:</span> {blogQuestion.question}</Link>
    );
};

export default BlogSideNav;