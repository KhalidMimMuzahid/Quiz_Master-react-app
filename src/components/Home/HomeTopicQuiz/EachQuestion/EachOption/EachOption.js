import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
const EachOption = ({option,id,handleOptionChange,selectedOption,correctAnswer}) => {
    const[isCross, setIsCross]= useState(false);
    const [isCorrect, setIsCorrect]= useState(false);
    const handleChange=(event)=>{
        const selectedOption= event.target.value;
        handleOptionChange(selectedOption)
        
        // check correct answer 
        if(selectedOption===correctAnswer){
            setIsCorrect(true);
            setIsCross(false)
        }
        else{
            setIsCorrect(false);
            setIsCross(true)
        }
    }
    

    return (
        <div className={`border border-black mx-2 my-1 flex pl-4 justify-between ${(isCorrect && selectedOption === option) && 'bg-green-500'} ${(isCross && selectedOption === option) && 'bg-rose-600'}`}>
            
            <div>
                <label htmlFor={id} ><input
                    type="radio"
                    id={id}
                    onChange={handleChange}
                    value={option}
                    checked={selectedOption === option}
                />{option}</label>
            </div>
            <div className='pr-2'>
                {
                    // if (selectedOption === option) {
                    //     if (isCorrect) {
                    //         <FontAwesomeIcon icon={faCheck} />
                    //     }
                    // }
                    ((selectedOption === option)&& isCorrect) && <FontAwesomeIcon icon={faCheck} />
                }
                {
                    
                    ((selectedOption === option)&& isCross) && <FontAwesomeIcon className='fa-solid fa-xmark' icon={faXmark} />
                }
            </div>
        </div>
    );
};

export default EachOption;