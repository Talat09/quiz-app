import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Option from "../Option/Option";
const QuizDetails = (props) => {
  const { selectedQuestion, setSelectedQuestion } = props;
  const { question, options, correctAnswer } = props.question;
  const checked = selectedQuestion.find((q) => q.question === question);
  const checkedOption = checked?.option;

  const handleCorrect = () => {
    toast(
      <p className="text-green-500 text-xl font-bold ">
        Correct Answer:{" "}
        <span className="text-gray-500 font-bold text-xl">{correctAnswer}</span>{" "}
      </p>
    );
  };
  return (
    <div className="justify-center bg-white border-gray-500 border w-1/2 my-5 mx-auto text-left px-5 py-4 shadow-xl shadow-white/40 rounded-lg">
      <div>
        <div className="flex justify-between">
          <h3 className="font-semibold"> {question} </h3>
          <FontAwesomeIcon
            onClick={() => handleCorrect()}
            className="ml-9 cursor-pointer"
            icon={faEye}
          ></FontAwesomeIcon>
        </div>

        <div>
          <Option
            options={options}
            question={question}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            checkedOption={checkedOption}
            correctAnswer={correctAnswer}
          ></Option>
        </div>
        <ToastContainer />
      </div>
      <br />
    </div>
  );
};

export default QuizDetails;
