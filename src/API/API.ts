import { Question, QuestionsState } from '../types/API';
import { shuffleAnswers } from '../utilities/shuffleAnswers';

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty
  ): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  
    const response = await fetch(endpoint);
    // Enforcing the expected API response type to ensure type safety
    const data = (await response.json()) as { results: Question[] };
  
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleAnswers([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  };
  
