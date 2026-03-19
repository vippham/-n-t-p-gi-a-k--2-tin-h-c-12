export type QuestionType = 'MCQ' | 'TF';

export interface Question {
  id: string;
  category: string; // e.g., "HTML", "Ethics", "Multimedia"
  type: QuestionType;
  text: string;
  codeSnippet?: string; // For HTML code display
  options?: string[]; // Only for MCQ (A, B, C, D)
  correctAnswer: string | boolean; // "A", "B"... for MCQ, true/false for TF
  explanation?: string; // Optional explanation for the answer
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<string, boolean>; // map question ID to isCorrect
  isFinished: boolean;
}