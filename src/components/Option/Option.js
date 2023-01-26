import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Option = ({
  options,
  question,
  selectedQuestion,
  setSelectedQuestion,
  checkedOption,
  correctAnswer,
}) => {
  const handleOption = (option) => {
    const selectedOption = {
      question: question,
      option: option,
    };
    if (selectedOption.option === correctAnswer) {
      toast("your answer is correct");
    } else {
      toast("your answer is wrong");
    }

    const newSelectedQuestion = selectedQuestion.filter(
      (q) => q.question !== question
    );
    setSelectedQuestion([...newSelectedQuestion, selectedOption]);
  };

  return (
    <div className="option">
      <div className="py-1">
        {checkedOption === options[0] ? (
          <FontAwesomeIcon icon={faCircleDot} className="text-blue-500" />
        ) : (
          <input
            onClick={() => handleOption(options[0])}
            type="radio"
            id="html"
            name="fav_language"
            value="html"
          />
        )}
        <label for=""> {options[0]}</label>
      </div>
      <div className="py-1">
        {checkedOption === options[1] ? (
          <FontAwesomeIcon icon={faCircleDot} className="text-blue-500" />
        ) : (
          <input
            onClick={() => handleOption(options[1])}
            type="radio"
            id="html"
            name="fav_language"
            value="html"
          />
        )}
        <label for="css"> {options[1]}</label>
      </div>
      <div className="py-1">
        {checkedOption === options[2] ? (
          <FontAwesomeIcon icon={faCircleDot} className="text-blue-500" />
        ) : (
          <input
            onClick={() => handleOption(options[2])}
            type="radio"
            id="html"
            name="fav_language"
            value="html"
          />
        )}
        <label for="javascript"> {options[2]}</label>
      </div>

      <div className="py-1">
        {checkedOption === options[3] ? (
          <FontAwesomeIcon icon={faCircleDot} className="text-blue-500" />
        ) : (
          <input
            onClick={() => handleOption(options[3])}
            type="radio"
            id="html"
            name="fav_language"
            value="html"
          />
        )}
        <label for="javascript"> {options[3]}</label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Option;
