import React from 'react';
import { QuestionCard } from '../types/questionCard';

import AnswerButton from './questionCard/children/answerButton';
import { Wrapper } from './questionCard/children/wrapper';

const QuestionCard = ({
  question,
  answers = [],
  callback,
  userAnswer,
  questionNr = 1,
  totalQuestions = 1,
}: QuestionCard) => {
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
