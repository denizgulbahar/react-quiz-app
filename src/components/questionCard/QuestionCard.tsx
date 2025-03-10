import React from 'react';
import { QuestionCardType } from '../../types/questionCard';

import AnswerButton from './children/AnswerButton';
import { Wrapper } from './children/Wrapper';

const QuestionCard = ({
  question,
  answers = [],
  callback,
  userAnswer,
  questionNr = 1,
  totalQuestions = 1,
}: QuestionCardType) => {
  return (
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
  );
};

export default QuestionCard;
