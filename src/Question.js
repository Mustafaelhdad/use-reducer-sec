import React from "react";

function Question({ question }) {
  console.log("Question is:", question);

  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option) => (
          <button className="btn btn-option">{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Question;
