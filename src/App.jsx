import { useState, useEffect, useCallback } from 'react';
import { sampleQuizData } from './questions';

// Sample quiz data - you can replace this with your actual data

export default function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  // Function to shuffle quiz data
  useEffect(() => {
    const shuffledQuizData = [...sampleQuizData].sort(() => Math.random() - 0.5);
    setQuizData(shuffledQuizData);
  }, []);

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsAnswerChecked(true);
    setIsAnswerSubmitted(true);
    
    // Save the selected answer
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = option;
    setUserAnswers(updatedUserAnswers);
    
    // Check if answer is correct
    const correct = option === quizData[currentQuestion].correct;
    setIsCorrect(correct);
    
    // Show explanation automatically if the answer is wrong
    if (!correct) {
      setShowExplanation(true);
    } else {
      setShowExplanation(false);
    }
  };

  // Handle next question
  const handleNextQuestion = () => {
    // Update score if answer was correct
    if (selectedOption === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    // Reset states for next question
    setShowExplanation(false);
    setIsAnswerSubmitted(false);
    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      
      // Restore next answer if it exists
      if (userAnswers[currentQuestion + 1]) {
        setSelectedOption(userAnswers[currentQuestion + 1]);
        
        // Check if the restored answer is correct
        const correct = userAnswers[currentQuestion + 1] === quizData[currentQuestion + 1].correct;
        setIsCorrect(correct);
        setIsAnswerChecked(true);
        setShowExplanation(!correct);
      } else {
        setSelectedOption("");
        setIsAnswerChecked(false);
        setIsCorrect(false);
      }
    } else {
      setShowResult(true);
    }
  };

  // Handle previous question
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      // Save the current answer if selected before going back
      if (selectedOption && !isAnswerSubmitted) {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestion] = selectedOption;
        setUserAnswers(updatedUserAnswers);
      }
      
      setCurrentQuestion(currentQuestion - 1);
      
      // Restore previous answer if it exists
      if (userAnswers[currentQuestion - 1]) {
        setSelectedOption(userAnswers[currentQuestion - 1]);
        
        // Check if the restored answer is correct
        const correct = userAnswers[currentQuestion - 1] === quizData[currentQuestion - 1].correct;
        setIsCorrect(correct);
        setIsAnswerChecked(true);
        setShowExplanation(!correct);
      } else {
        setSelectedOption("");
        setIsAnswerChecked(false);
        setIsCorrect(false);
        setShowExplanation(false);
      }
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (showResult) return; // Don't handle keys on result screen
    
    switch(event.key) {
      case "ArrowRight":
        if (selectedOption) handleNextQuestion();
        break;
      case "ArrowLeft":
        handlePreviousQuestion();
        break;
      default:
        break;
    }
  }, [showResult, selectedOption, handleNextQuestion, handlePreviousQuestion]);

  // Setup keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    // Initialize user answers array with the same length as quiz data
    if (quizData.length > 0 && userAnswers.length === 0) {
      setUserAnswers(new Array(quizData.length).fill(""));
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quizData, handleKeyDown, userAnswers.length]);

  // Handle restart quiz
  const handleRestartQuiz = () => {
    const shuffledQuizData = [...sampleQuizData].sort(() => Math.random() - 0.5);
    setQuizData(shuffledQuizData);
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setUserAnswers(new Array(shuffledQuizData.length).fill(""));
    setIsAnswerSubmitted(false);
  };

  // Show explanation
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };
  
  // If quiz data hasn't loaded yet
  if (quizData.length === 0) {
    return <div className="flex justify-center items-center h-screen">Loading quiz...</div>;
  }

  // Helper function to get option style
  const getOptionStyle = (option) => {
    // If answer has been checked
    if (isAnswerChecked) {
      // Correct answer is always highlighted in green
      if (option === quizData[currentQuestion].correct) {
        return "bg-green-100 border-green-500 text-green-800";
      }
      
      // Selected option that's wrong is highlighted in red
      if (selectedOption === option && option !== quizData[currentQuestion].correct) {
        return "bg-red-100 border-red-500 text-red-800";
      }
      
      // Default non-selected option
      return "hover:bg-gray-50";
    }
    
    // Before answer is checked, just show selection
    return selectedOption === option ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        {!showResult ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Quiz Application</h2>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Question {currentQuestion + 1}/{quizData.length}</span>
                <span className="text-gray-600">Score: {score}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{quizData[currentQuestion].question}</h3>
              <div className="space-y-3">
                {quizData[currentQuestion].options.map((option, index) => (
                  <div 
                    key={index}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${getOptionStyle(option)}`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span className="font-medium">{String.fromCharCode(97 + index)}. </span>
                    {option}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="flex justify-between">
                <button
                  className={`bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  ← Previous
                </button>
                
                <button
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  onClick={handleNextQuestion}
                  disabled={!selectedOption}
                >
                  {currentQuestion < quizData.length - 1 ? "Next →" : "Finish Quiz"}
                </button>
              </div>
              
              <div className="mt-3 text-center text-sm text-gray-500">
                <p>Use ← → arrow keys to navigate between questions</p>
              </div>
              
              {isAnswerChecked && isCorrect && (
                <div className="mt-2 p-3 bg-green-50 border border-green-100 rounded-lg">
                  <p className="text-green-700 font-medium">Correct answer!</p>
                </div>
              )}
              
              {showExplanation && (
                <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-gray-700">
                    {isCorrect ? "" : <span className="block font-medium text-red-700 mb-1">Incorrect! The correct answer is: {quizData[currentQuestion].correct}</span>}
                    <span className="font-medium">Explanation: </span>{quizData[currentQuestion].explanation}
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Quiz Completed!</h2>
            <p className="text-3xl font-bold mb-6">Your Score: {score}/{quizData.length}</p>
            <p className="mb-6">
              {score === quizData.length 
                ? "Perfect! You got all questions correct." 
                : score >= quizData.length / 2 
                  ? "Good job! You passed the quiz." 
                  : "Better luck next time."}
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}