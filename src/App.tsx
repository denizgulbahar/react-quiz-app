import React, { useState } from 'react';
import { fetchQuizQuestions } from './API/API';
// Components
import QuestionCard from './components/questionCard/QuestionCard';
// Types
import { QuestionsState } from './types/API';
import { AnswerObject } from './types/questionCard';
import { Difficulty } from './API/API';
import './App.css'
import LoadingIndicator from './components/LoadingIndicator';

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const resetGame = () => {
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    try {
      // Fetch new trivia questions based on total questions and difficulty level
      const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
      setQuestions(newQuestions);
      resetGame();
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver) return;
    const answer = (e.target as HTMLElement).textContent?.trim() || ""
    const correct = questions[number].correct_answer === answer;

    if (correct) {
      setScore((prev) => prev + 10);
    }

    const answerObject: AnswerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
     
    } else {
      setNumber(nextQ);
    }
  };

  const isNextQuestionButtonVisible = 
    !gameOver &&  
    !loading &&  
    userAnswers.length === number + 1 &&  
    number !== TOTAL_QUESTIONS - 1;

  return (
    <div className="wrapper gap-8">
      <h1>REACT QUIZ</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      )}

      {!gameOver && <p className="score">Score: {score}</p>}

      {loading && <LoadingIndicator />}

      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers[number]}
          callback={checkAnswer}
        />
      )}

      {isNextQuestionButtonVisible && (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default App;
