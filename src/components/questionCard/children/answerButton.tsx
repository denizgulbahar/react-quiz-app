import React from 'react';
import { AnswerButtonType, ButtonWrapperType } from '../../../types/answerButton';

const ButtonWrapper: React.FC<ButtonWrapperType> = ({ correct, userClicked, children, onClick, disabled }) => {
  const bgClasses = {
    correct: 'bg-gradient-to-r from-[#56FFA4] to-[#59BC86]',
    wrong: 'bg-gradient-to-r from-[#FF5656] to-[#C16868]',
    default: 'bg-gradient-to-r from-[#56ccff] to-[#6eafb4]',
  };

  const bgClass = correct ? bgClasses.correct : userClicked ? bgClasses.wrong : bgClasses.default;

  return (
    <div className="transition-all duration-300 ease-in-out hover:opacity-80">
      <button 
        className={`cursor-pointer select-none text-sm w-full h-10 my-1 border border-white shadow-sm rounded-lg text-white ${bgClass}`}
        onClick={onClick}
        disabled={disabled}
        style={{ backgroundColor: "transparent" }}
      >
        {children}
      </button>
    </div>
  );
};

const AnswerButton: React.FC<AnswerButtonType> = ({ answer, callback, userAnswer }) => {
  const isCorrect = userAnswer?.correctAnswer === answer;
  const isClicked = userAnswer?.answer === answer;

  return (
    <ButtonWrapper 
      correct={isCorrect} 
      userClicked={isClicked} 
      onClick={callback} 
      disabled={!!userAnswer}
    >
      <span style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: answer }} />
    </ButtonWrapper>
  );
};

export default AnswerButton;
