import React from 'react';

import AnswerButton from './questionCard/children/answerButton';
import { Wrapper } from './questionCard/children/wrapper';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer?: AnswerObject;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers = [],
  callback,
  userAnswer,
  questionNr = 1,
  totalQuestions = 1,
}: Props) => {
  return (
    <>
    <Wrapper>
      <p className='number'>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <>
        {answers.map((answer) => (
          <AnswerButton key={answer} answer={answer} callback={callback} userAnswer={userAnswer} />
        ))}
      </>
    </Wrapper>
    </>
  );
};

export default QuestionCard;
