import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuizCard from "../components/QuizCard";


const quizData = [
  {
    question: "Which keyword is used to declare variables that can be reassigned?",
    options: ["const", "let", "var", "Both let and var"],
    correctAnswer: 3,
    explanation: "Both 'let' and 'var' can be used to declare variables that can be reassigned, but 'let' is block-scoped while 'var' is function-scoped. 'const' is used for constants that cannot be reassigned."
  },
  {
    question: "What will be the output of: console.log(typeof []);",
    options: ["array", "object", "undefined", "null"],
    correctAnswer: 1,
    explanation: "In JavaScript, arrays are actually objects, so typeof [] returns 'object'."
  },
  {
    question: "Which method adds a new item to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0,
    explanation: "push() adds an item to the end of an array, pop() removes from the end, shift() removes from the beginning, and unshift() adds to the beginning."
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    options: [
      "Checks for equality, converting types if necessary",
      "Checks for equality without type conversion",
      "Assigns a value to a variable",
      "Compares the references of objects"
    ],
    correctAnswer: 1,
    explanation: "The strict equality operator (===) checks for equality without type conversion, while the loose equality operator (==) converts types if necessary."
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    options: ["<!-- Comment -->", "/* Comment */", "// Comment", "# Comment"],
    correctAnswer: 2,
    explanation: "In JavaScript, single-line comments start with //. /* */ is used for multi-line comments."
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow" style={{ backgroundColor: 'var(--color-gray-50)', padding: '3rem 0' }}>
        <div className="page-container">
          <h1 className="page-title">JavaScript Quiz</h1>
          
          {!quizCompleted ? (
            <div className="quiz-container">
              <div className="quiz-progress">
                <p className="quiz-progress-text">
                  Question {currentQuestionIndex + 1} of {quizData.length}
                </p>
                <div className="quiz-progress-bar">
                  <div 
                    className="quiz-progress-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <QuizCard 
                question={quizData[currentQuestionIndex].question}
                options={quizData[currentQuestionIndex].options}
                correctAnswer={quizData[currentQuestionIndex].correctAnswer}
                explanation={quizData[currentQuestionIndex].explanation}
                key={currentQuestionIndex}
              />
            </div>
          ) : (
            <div className="quiz-results">
              <div className="quiz-results-card">
                <h2 className="quiz-results-title">Quiz Completed!</h2>
                <p className="quiz-results-score">
                  Your score: <span style={{ fontWeight: '600' }}>{score}</span> out of {quizData.length}
                </p>
                <p className="quiz-results-message">
                  {score === quizData.length ? (
                    "Perfect! You've mastered these JavaScript concepts."
                  ) : score >= quizData.length / 2 ? (
                    "Good job! Keep learning to master JavaScript."
                  ) : (
                    "Keep practicing! JavaScript takes time to master."
                  )}
                </p>
                <button
                  onClick={restartQuiz}
                  className="quiz-again-button"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;