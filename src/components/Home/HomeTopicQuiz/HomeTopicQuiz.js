import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuestion from './EachQuestion/EachQuestion';

const HomeTopicQuiz = () => {
    const quizes= useLoaderData();
    const{data}= quizes;
    const {name, questions,total}= data;

    return (
        <div>
            <h1>name: {name}</h1>
            {
                questions.map(question=><EachQuestion
                    key={question.id}
                    question={question}
                    questionNo={questions.indexOf(question)}
                    ></EachQuestion>)
            }
        </div>
    );
};

export default HomeTopicQuiz;