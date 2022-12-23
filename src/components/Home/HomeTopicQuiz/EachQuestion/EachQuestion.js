import React, { useState } from "react";
import EachOption from "./EachOption/EachOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const EachQuestion = ({ question, questionNo }) => {
  const [isView, setIsView] = useState(false);
  const serialNo = questionNo + 1;
  const { options, correctAnswer } = question;

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="border border-black border-2 mx-3 my-3 py-4">
      <div className="flex justify-between">
        <h1 className="inline font-bold">
          Quiz {serialNo}: <span>{question.question}</span>
        </h1>
        <FontAwesomeIcon
          className="mr-4 hover:bg-green-500 p-2"
          icon={faEye}
          onClick={() => setIsView(!isView)}
        />
      </div>

      <form className="grid grid-cols-2" action="">
        {options.map((option) => (
          <EachOption
            // key={options.indexOf(option)}
            option={option}
            id={options.indexOf(option)}
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
            correctAnswer={correctAnswer}
          ></EachOption>
        ))}
      </form>
      <div className={isView ? "flex justify-center" : "hidden"}>
        {" "}
        <span className="font-bold"> correct Answer: {correctAnswer}</span>
      </div>
    </div>
  );
};

export default EachQuestion;
