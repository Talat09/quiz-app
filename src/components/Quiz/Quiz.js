import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import QuizDetails from "../QuizDetails/QuizDetails"

const Quiz = () => {
  const quiz = useLoaderData();
  const questions = quiz.data.questions;
  const [selectedQuestion, setSelectedQuestion] = useState([])

  return (
    <div className="py-9">
      <h1 className="text-white text-5xl font-bold">Lets Practice!!</h1>
      <div className="w-25  mx-auto">
        {questions.map((question) => (
          <QuizDetails key={question.id} question={question} selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion}></QuizDetails>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
