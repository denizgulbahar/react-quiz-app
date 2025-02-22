// Shuffles correct and incorrect answers randomly  
export const shuffleAnswers = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
