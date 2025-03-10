interface AnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};
export type QuestionCard = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer?: AnswerObject;
    questionNr: number;
    totalQuestions: number;
};