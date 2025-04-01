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
      <p className='number p-5'>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="flex flex-col">
        {answers.map((answer) => (
          <AnswerButton key={answer} answer={answer} callback={callback} userAnswer={userAnswer} />
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
