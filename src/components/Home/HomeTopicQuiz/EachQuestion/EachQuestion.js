import React, { useState } from 'react';
import EachOption from './EachOption/EachOption';

const EachQuestion = ({question,questionNo}) => {
    const serialNo=questionNo+1;
    const {options,correctAnswer}= question;

    const [selectedOption, setSelectedOption]= useState("")
    const handleOptionChange=(selectedOption)=>{
        setSelectedOption(selectedOption);
    }
    return (
        <div className='border border-black border-2 mx-3 my-3 py-4'>
            <h1 className='inline font-bold'>Quiz {serialNo}:</h1> <span>{question.question}</span>
            <form className='grid grid-cols-2' action="">
            {
                options.map(option=><EachOption
                    key={options.indexOf(option)}
                    option={option}
                    id={options.indexOf(option)}
                    handleOptionChange={handleOptionChange}
                    selectedOption={selectedOption}
                    correctAnswer={correctAnswer}
                ></EachOption>)
            }
            </form>
        </div>
    );
};

export default EachQuestion;