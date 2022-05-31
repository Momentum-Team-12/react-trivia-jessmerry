import { useState } from "react";

function Questions({ questionText, correctAnswer, incorrectAnswers, index }) {
    const [isCorrect, setIsCorrect] = useState("unanswered");
    return (
    <div key={index}>
        <h2 className="question-text">{questionText}</h2>
        {isCorrect === "unanswered" ? (
        <>
            <button className="answer-button" onClick={() => {
                setIsCorrect("Correct"); 
                }}>
            {correctAnswer}
            </button>
            {incorrectAnswers.map((answer, index) => {
            return (
                <button className="answer-button" onClick={() => {
                    setIsCorrect("Wrong");
                }}
                key={index}
                >
                {answer}
                </button>
            );
            })}
        </>
        ) : isCorrect === "Correct" ? (
        <p>Correct!</p>
        ) : (
        <p>Incorrect :(</p>
        )}
    </div>
    );
}

export default Questions;