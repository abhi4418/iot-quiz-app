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
  const [showQuestionGrid, setShowQuestionGrid] = useState(false);
  const [markedQuestions, setMarkedQuestions] = useState([]);  // Add state for marked questions
  const [reviewMode, setReviewMode] = useState(false); // Add state for review mode

  // Function to load quiz data without shuffling
  useEffect(() => {
    // Use original order of questions by default
    setQuizData([...sampleQuizData]);
  }, []);
  
  // Function to shuffle quiz data when requested
  const handleShuffleQuiz = () => {
    // Reset quiz state
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowExplanation(false);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    
    // Shuffle the questions and their options
    const shuffledQuizData = [...sampleQuizData]
      .sort(() => Math.random() - 0.5)
      .map(question => ({
        ...question,
        options: [...question.options].sort(() => Math.random() - 0.5),
      }));
    setQuizData(shuffledQuizData);
    
    // Reset user answers
    setUserAnswers(new Array(shuffledQuizData.length).fill(""));
    setIsAnswerSubmitted(false);
    setShowQuestionGrid(false);
    setReviewMode(false); // Reset review mode as well
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    // If we're in review mode after quiz completion, don't allow changing answers
    if (reviewMode) {
      return;
    }
    
    setSelectedOption(option);
    setIsAnswerChecked(true);
    setIsAnswerSubmitted(true);
    
    // Save the selected answer
    const updatedUserAnswers = [...userAnswers];
    
    // Fix scoring system - only update score if this is a new answer or changing an answer
    const isNewAnswer = !updatedUserAnswers[currentQuestion];
    const previousAnswer = updatedUserAnswers[currentQuestion];
    const isCorrectAnswer = option === quizData[currentQuestion].correct;
    const wasCorrectAnswer = previousAnswer === quizData[currentQuestion].correct;
    
    // Update the user answer
    updatedUserAnswers[currentQuestion] = option;
    setUserAnswers(updatedUserAnswers);
    
    // Check if answer is correct
    setIsCorrect(isCorrectAnswer);
    
    // Update score based on answer change logic
    if (isNewAnswer && isCorrectAnswer) {
      // New correct answer
      setScore(prevScore => prevScore + 1);
    } else if (!isNewAnswer && wasCorrectAnswer && !isCorrectAnswer) {
      // Changed from correct to incorrect
      setScore(prevScore => prevScore - 1);
    } else if (!isNewAnswer && !wasCorrectAnswer && isCorrectAnswer) {
      // Changed from incorrect to correct
      setScore(prevScore => prevScore + 1);
    }
    
    // Show explanation for all answers, whether correct or incorrect
    setShowExplanation(true);
  };

  // Handle next question
  const handleNextQuestion = () => {    
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
      // Recalculate final score before showing results to ensure accuracy
      let finalScore = 0;
      userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
          finalScore++;
        }
      });
      setScore(finalScore);
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

  // Jump to a specific question from the grid
  const handleQuestionSelect = (index) => {
    // Save current answer if needed
    if (selectedOption && !isAnswerSubmitted && !userAnswers[currentQuestion]) {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[currentQuestion] = selectedOption;
      setUserAnswers(updatedUserAnswers);
    }
    
    setCurrentQuestion(index);
    
    // Restore answer for selected question if it exists
    if (userAnswers[index]) {
      setSelectedOption(userAnswers[index]);
      const correct = userAnswers[index] === quizData[index].correct;
      setIsCorrect(correct);
      setIsAnswerChecked(true);
      setShowExplanation(!correct);
      setIsAnswerSubmitted(true);
    } else {
      setSelectedOption("");
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setShowExplanation(false);
      setIsAnswerSubmitted(false);
    }
    
    // Hide the grid after selecting a question
    setShowQuestionGrid(false);
  };

  // Toggle question grid visibility
  const toggleQuestionGrid = () => {
    setShowQuestionGrid(!showQuestionGrid);
  };

  // Toggle marked question
  const toggleMarkedQuestion = (index) => {
    const isMarked = markedQuestions.includes(index);
    if (isMarked) {
      setMarkedQuestions(markedQuestions.filter(q => q !== index));
    } else {
      setMarkedQuestions([...markedQuestions, index]);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (showResult && !reviewMode) return; // Don't handle keys on result screen unless in review mode
    
    switch(event.key) {
      case "ArrowRight":
        if (selectedOption || reviewMode) handleNextQuestion();
        break;
      case "ArrowLeft":
        handlePreviousQuestion();
        break;
      case "g":
        toggleQuestionGrid();
        break;
      default:
        break;
    }
  }, [showResult, selectedOption, reviewMode, handleNextQuestion, handlePreviousQuestion, toggleQuestionGrid]);

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
    setShowQuestionGrid(false);
    setReviewMode(false); // Exit review mode when restarting
  };
  
  // Start review mode to revisit questions after quiz completion
  const startReviewMode = () => {
    setReviewMode(true);
    setShowResult(false);
    
    // If there are marked questions, go to the first one
    if (markedQuestions.length > 0) {
      setCurrentQuestion(markedQuestions[0]);
    } else {
      setCurrentQuestion(0);
    }
    
    // Restore the selected answer for the current question
    if (userAnswers[currentQuestion]) {
      setSelectedOption(userAnswers[currentQuestion]);
      const correct = userAnswers[currentQuestion] === quizData[currentQuestion].correct;
      setIsCorrect(correct);
      setIsAnswerChecked(true);
      setShowExplanation(true); // Always show explanation in review mode
    }
  };
  
  // Return to results page from review mode
  const returnToResults = () => {
    setReviewMode(false);
    setShowResult(true);
  };

  // Handle submit quiz at any point
  const handleSubmitQuiz = () => {
    // Ask for confirmation before submitting
    const unansweredQuestions = userAnswers.filter(answer => !answer).length;
    let confirmMessage = "Are you sure you want to submit the quiz now?";
    
    if (unansweredQuestions > 0) {
      confirmMessage = `You have ${unansweredQuestions} unanswered ${unansweredQuestions === 1 ? 'question' : 'questions'}. Are you sure you want to submit the quiz?`;
    }
    
    if (window.confirm(confirmMessage)) {
      // Calculate final score
      let finalScore = 0;
      userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
          finalScore++;
        }
      });
      setScore(finalScore);
      setShowResult(true);
    }
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
    // If answer has been checked or if in review mode
    if (isAnswerChecked || reviewMode) {
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

  // Get the status of a question (correct, incorrect, unattempted)
  const getQuestionStatus = (index) => {
    if (!userAnswers[index]) {
      return "unattempted";
    }
    return userAnswers[index] === quizData[index].correct ? "correct" : "incorrect";
  };

  // Get style for question grid item
  const getQuestionGridItemStyle = (index) => {
    const status = getQuestionStatus(index);
    const isCurrentQuestion = index === currentQuestion;
    const isMarked = markedQuestions.includes(index);
    
    let styles = isCurrentQuestion ? 'ring-2 ring-blue-500 ' : '';
    
    // Add star/mark indicator if question is marked
    if (isMarked) {
      styles += 'border-2 border-yellow-500 ';
    }
    
    if (status === "correct") {
      return `${styles}bg-green-100 border-green-500 text-green-800`;
    } else if (status === "incorrect") {
      return `${styles}bg-red-100 border-red-500 text-red-800`;
    } else {
      return `${styles}bg-gray-100 border-gray-300 text-gray-800`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 relative">
        {!showResult ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">Quiz Application</h2>
                <div className="text-lg font-semibold bg-blue-100 px-3 py-1 rounded-lg">
                  Score: {score}/{quizData.length}
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Question {currentQuestion + 1}/{quizData.length}</span>
                <div className="flex space-x-2">
                  {!reviewMode && (
                    <button 
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleShuffleQuiz()}
                      title="Shuffle quiz questions"
                    >
                      🔀 Shuffle
                    </button>
                  )}
                  <button 
                    className="text-blue-500 hover:text-blue-700"
                    onClick={toggleQuestionGrid}
                  >
                    {showQuestionGrid ? 'Hide Grid' : 'Show Grid'}
                  </button>
                  {reviewMode && (
                    <button 
                      className="text-blue-500 hover:text-blue-700"
                      onClick={returnToResults}
                      title="Return to results page"
                    >
                      Results Page
                    </button>
                  )}
                </div>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}>
                </div>
              </div>
            </div>

            {/* Question Grid */}
            {showQuestionGrid && (
              <div className="mb-6 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="text-md font-medium mb-2">Question Navigation:</h3>
                <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                  {quizData.map((_, index) => (
                    <button
                      key={index}
                      className={`w-full aspect-square flex items-center justify-center font-medium rounded-md border ${getQuestionGridItemStyle(index)}`}
                      onClick={() => handleQuestionSelect(index)}
                      title={getQuestionStatus(index) === "correct" ? "Correct" : getQuestionStatus(index) === "incorrect" ? "Incorrect" : "Unattempted"}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="mt-2 flex justify-center space-x-4 text-xs flex-wrap">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-100 border border-green-500 rounded-full mr-1"></div>
                    <span>Correct</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-100 border border-red-500 rounded-full mr-1"></div>
                    <span>Incorrect</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-100 border border-gray-300 rounded-full mr-1"></div>
                    <span>Unattempted</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 border-2 border-yellow-500 rounded-full mr-1"></div>
                    <span>Marked</span>
                  </div>
                </div>
              </div>
            )}

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
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    className={`bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    ← Previous
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg transition-all ${
                      markedQuestions.includes(currentQuestion) 
                        ? 'bg-yellow-300 text-yellow-800 hover:bg-yellow-400 border-2 border-yellow-500 font-medium shadow-md transform scale-105' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                    onClick={() => toggleMarkedQuestion(currentQuestion)}
                    title={markedQuestions.includes(currentQuestion) ? "Unmark this question" : "Mark this question for later review"}
                  >
                    {markedQuestions.includes(currentQuestion) ? "⭐ Marked" : "☆ Mark"}
                  </button>
                </div>
                <div className="flex space-x-2">
                  {!reviewMode && (
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                      onClick={handleSubmitQuiz}
                      title="Submit quiz and see your final score"
                    >
                      Submit Quiz
                    </button>
                  )}
                  <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    onClick={handleNextQuestion}
                    disabled={!selectedOption && !reviewMode}
                  >
                    {currentQuestion < quizData.length - 1 ? "Next →" : "Finish Quiz"}
                  </button>
                </div>
              </div>
              
              <div className="mt-3 text-center text-sm text-gray-500">
                <p>Use ← → arrow keys to navigate between questions</p>
                <p>Press 'g' to toggle question grid</p>
                {reviewMode && <p className="text-blue-600 font-medium">Review Mode - Answers cannot be changed</p>}
              </div>
              
              {isAnswerChecked && isCorrect && !reviewMode && (
                <div className="mt-2 p-3 bg-green-50 border border-green-100 rounded-lg">
                  <p className="text-green-700 font-medium">Correct answer!</p>
                </div>
              )}
              
              {(showExplanation || reviewMode) && (
                <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-gray-700">
                    {!isCorrect && <span className="block font-medium text-red-700 mb-1">Incorrect! The correct answer is: {quizData[currentQuestion].correct}</span>}
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
            
            {/* Question Summary Grid */}
            <div className="mb-6 p-3 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-md font-medium mb-2">Question Summary:</h3>
              <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                {quizData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-full aspect-square flex items-center justify-center font-medium rounded-md border ${getQuestionGridItemStyle(index)}`}
                    title={getQuestionStatus(index) === "correct" ? "Correct" : "Incorrect"}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-center space-x-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-100 border border-green-500 rounded-full mr-1"></div>
                  <span>Correct</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-100 border border-red-500 rounded-full mr-1"></div>
                  <span>Incorrect</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-100 border border-gray-300 rounded-full mr-1"></div>
                  <span>Unattempted</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 border-2 border-yellow-500 rounded-full mr-1"></div>
                  <span>Marked</span>
                </div>
              </div>
            </div>
            
            {/* Marked Questions Summary */}
            {markedQuestions.length > 0 && (
              <div className="mb-6 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="text-md font-medium mb-2">You marked {markedQuestions.length} question(s) for review:</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {markedQuestions.map((index) => (
                    <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Question {index + 1}
                    </span>
                  ))}
                </div>
                <button
                  onClick={startReviewMode}
                  className="mt-3 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Review Marked Questions
                </button>
              </div>
            )}
            
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={handleRestartQuiz}
              >
                Restart Quiz
              </button>
              
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
                onClick={startReviewMode}
              >
                Review All Questions
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}