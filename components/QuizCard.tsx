import React from 'react';
import { CheckCircle2, Lightbulb, XCircle } from 'lucide-react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  selectedAnswer: string | boolean | null;
  onSelect: (answer: string | boolean) => void;
  showFeedback: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedAnswer,
  onSelect,
  showFeedback,
}) => {
  const isMCQ = question.type === 'MCQ';

  const getOptionStyle = (optionValue: string | boolean) => {
    const baseStyle =
      'w-full rounded-2xl border-2 p-4 text-left transition-all duration-200 flex items-start gap-3 ';

    if (!showFeedback) {
      if (selectedAnswer === optionValue) {
        return `${baseStyle} border-blue-500 bg-blue-50 text-blue-900 shadow-[0_12px_30px_-22px_rgba(59,130,246,0.75)]`;
      }

      return `${baseStyle} border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 text-slate-700`;
    }

    if (optionValue === question.correctAnswer) {
      return `${baseStyle} border-green-500 bg-green-50 text-green-900`;
    }

    if (selectedAnswer === optionValue && selectedAnswer !== question.correctAnswer) {
      return `${baseStyle} border-red-500 bg-red-50 text-red-900`;
    }

    return `${baseStyle} border-slate-100 bg-slate-50 text-slate-400 opacity-70`;
  };

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-[0_24px_65px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-[linear-gradient(135deg,_rgba(248,250,252,1),_rgba(239,246,255,0.8))] px-6 py-4">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {question.category}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            question.type === 'MCQ'
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-orange-100 text-orange-700'
          }`}
        >
          {question.type === 'MCQ' ? 'Trắc nghiệm ABCD' : 'Đúng / Sai'}
        </span>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="mb-2 text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
          {question.text}
        </h3>

        {question.codeSnippet && (
          <div className="my-5 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-50 shadow-inner">
            <code className="font-mono leading-6">{question.codeSnippet}</code>
          </div>
        )}

        <div className="mt-8 space-y-3">
          {isMCQ ? (
            question.options?.map((option) => {
              const optionLetter = option.charAt(0);
              const isActive = selectedAnswer === optionLetter && !showFeedback;
              const isCorrect = showFeedback && optionLetter === question.correctAnswer;
              const isWrong = showFeedback && selectedAnswer === optionLetter && !isCorrect;

              return (
                <button
                  key={option}
                  onClick={() => !showFeedback && onSelect(optionLetter)}
                  disabled={showFeedback}
                  className={getOptionStyle(optionLetter)}
                >
                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      isActive ? 'border-blue-500 bg-blue-500 text-white' : 'border-slate-300 text-slate-500'
                    } ${isCorrect ? '!border-green-500 !bg-green-500 !text-white' : ''} ${
                      isWrong ? '!border-red-500 !bg-red-500 !text-white' : ''
                    }`}
                  >
                    {optionLetter}
                  </div>
                  <span className="flex-1 leading-7">{option.substring(2)}</span>
                  {isCorrect && <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-green-600" />}
                  {isWrong && <XCircle className="ml-auto h-5 w-5 shrink-0 text-red-600" />}
                </button>
              );
            })
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => !showFeedback && onSelect(true)}
                disabled={showFeedback}
                className={getOptionStyle(true)}
              >
                <span className="font-bold">Đúng</span>
                {showFeedback && question.correctAnswer === true && (
                  <CheckCircle2 className="ml-auto h-5 w-5 text-green-600" />
                )}
                {showFeedback && selectedAnswer === true && selectedAnswer !== question.correctAnswer && (
                  <XCircle className="ml-auto h-5 w-5 text-red-600" />
                )}
              </button>
              <button
                onClick={() => !showFeedback && onSelect(false)}
                disabled={showFeedback}
                className={getOptionStyle(false)}
              >
                <span className="font-bold">Sai</span>
                {showFeedback && question.correctAnswer === false && (
                  <CheckCircle2 className="ml-auto h-5 w-5 text-green-600" />
                )}
                {showFeedback && selectedAnswer === false && selectedAnswer !== question.correctAnswer && (
                  <XCircle className="ml-auto h-5 w-5 text-red-600" />
                )}
              </button>
            </div>
          )}
        </div>

        {showFeedback && question.explanation && (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/90 p-4 text-sm text-amber-900 animate-in fade-in slide-in-from-top-2">
            <div className="mb-2 flex items-center gap-2 font-bold">
              <Lightbulb className="h-4 w-4" />
              Giải thích
            </div>
            <p className="leading-6">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};
