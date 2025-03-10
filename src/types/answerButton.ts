
export type ButtonWrapperType ={
    correct: boolean;
    userClicked: boolean;
    children: React.ReactNode; 
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}
  
export type AnswerButtonType = {
    answer: string;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer?: { answer: string; correctAnswer: string };
}