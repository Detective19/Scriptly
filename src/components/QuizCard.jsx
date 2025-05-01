import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const QuizCard = ({ question, options, correctAnswer, explanation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const handleOptionSelect = (index) => {
    if (!isAnswered) {
      setSelectedOption(index);
    }
  };
  
  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsAnswered(true);
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };
  
  const isCorrect = selectedOption === correctAnswer;
  
  const getOptionClassName = (index) => {
    let className = "quiz-option";
    
    if (!isAnswered) {
      if (selectedOption === index) {
        className += " selected";
      }
    } else {
      if (selectedOption === index) {
        className += isCorrect ? " correct" : " incorrect";
      } else if (index === correctAnswer) {
        className += " correct";
      } else {
        className += " disabled";
      }
    }
    
    return className;
  };
  
  return (
    <div className="quiz-card">
      <div className="quiz-card-header">
        <h3 className="quiz-card-title">{question}</h3>
      </div>
      <div className="quiz-card-content">
        {options.map((option, index) => (
          <div
            key={index}
            className={getOptionClassName(index)}
            onClick={() => handleOptionSelect(index)}
          >
            <span>{option}</span>
            {isAnswered && index === correctAnswer && (
              <Check size={20} color="#22c55e" />
            )}
            {isAnswered && selectedOption === index && !isCorrect && (
              <X size={20} color="#ef4444" />
            )}
          </div>
        ))}
        
        {isAnswered && explanation && (
          <div className="quiz-explanation">
            <p className="quiz-explanation-title">Explanation:</p>
            <p className="quiz-explanation-text">{explanation}</p>
          </div>
        )}
      </div>
      <div className="quiz-card-footer">
        {!isAnswered ? (
          <button 
            disabled={selectedOption === null} 
            onClick={handleSubmit}
            className="quiz-button quiz-button-primary"
          >
            Submit Answer
          </button>
        ) : (
          <button 
            onClick={handleNextQuestion}
            className="quiz-button quiz-button-secondary"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCard;