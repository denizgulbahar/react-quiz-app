import { useState } from 'react'
import QuestionCard, { AnswerObject } from './components/questionCard';

function App() {
  const question = "What is the capital of France?";
  const answers = ["Berlin", "Madrid", "Paris", "Rome"];
  const totalQuestions = 5;
  const questionNr = 1;
  const [userAnswer, setUserAnswer] = useState<AnswerObject | undefined>(undefined);

  const handleAnswerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedAnswer = e.currentTarget.innerText;
    setUserAnswer({ answer: selectedAnswer, correct: selectedAnswer === "Paris" });
    console.log("deno")
  };

  return (
    <div className="bg-custom h-screen flex flex-col items-center justify-center" style={{ padding: 20, borderRadius: 20}}>

      <h1>Quiz App</h1>
      <QuestionCard 
        question={question} 
        answers={answers} 
        callback={handleAnswerClick} 
        userAnswer={userAnswer} 
        questionNr={questionNr} 
        totalQuestions={totalQuestions} 
      />
    </div>
  )
}

export default App
