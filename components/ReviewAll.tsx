import React from 'react';
import { ArrowLeft, CheckCircle2, LibraryBig } from 'lucide-react';
import { questions } from '../data';

interface ReviewAllProps {
  onBack: () => void;
}

export const ReviewAll: React.FC<ReviewAllProps> = ({ onBack }) => {
  const mcqCount = questions.filter((question) => question.type === 'MCQ').length;
  const tfCount = questions.length - mcqCount;

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 animate-in fade-in duration-500">
      <button
        onClick={onBack}
        className="mb-2 flex items-center gap-2 rounded-2xl px-1 py-2 font-medium text-slate-500 transition-colors hover:text-blue-600"
      >
        <ArrowLeft className="h-5 w-5" />
        Quay lại trang chủ
      </button>

      <div className="rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-[0_22px_55px_-36px_rgba(15,23,42,0.45)] md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
              <LibraryBig className="h-4 w-4" />
              Kho đáp án tham khảo
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Tổng hợp toàn bộ câu hỏi và đáp án
            </h2>
            <p className="mt-2 leading-7 text-slate-500">
              Dùng khu vực này để rà lại kiến thức theo chuyên đề, đối chiếu đáp án và đọc nhanh
              trước khi bắt đầu làm bài.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:min-w-[320px]">
            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{questions.length}</p>
              <p className="text-sm text-slate-500">Tổng câu</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{mcqCount}</p>
              <p className="text-sm text-slate-500">ABCD</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{tfCount}</p>
              <p className="text-sm text-slate-500">Đúng/Sai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className="rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-[0_20px_45px_-34px_rgba(15,23,42,0.4)]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-100 font-bold text-blue-700">
                {index + 1}
              </div>

              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                    {q.category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      q.type === 'MCQ'
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {q.type === 'MCQ' ? 'Trắc nghiệm ABCD' : 'Đúng / Sai'}
                  </span>
                </div>

                <h3 className="mb-4 text-lg font-semibold text-slate-900">{q.text}</h3>

                {q.type === 'MCQ' ? (
                  <div className="space-y-2">
                    {q.options?.map((opt) => {
                      const isCorrect = opt.charAt(0) === q.correctAnswer;
                      return (
                        <div
                          key={opt}
                          className={`flex items-start gap-3 rounded-2xl border p-3 ${
                            isCorrect
                              ? 'border-green-500 bg-green-50 text-green-900'
                              : 'border-slate-100 bg-slate-50 text-slate-500'
                          }`}
                        >
                          <div
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                              isCorrect
                                ? 'border-green-500 bg-green-500 text-white'
                                : 'border-slate-300 text-slate-400'
                            }`}
                          >
                            {opt.charAt(0)}
                          </div>
                          <span className={`${isCorrect ? 'font-medium' : ''} flex-1 leading-6`}>
                            {opt.substring(2)}
                          </span>
                          {isCorrect && (
                            <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-green-600" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div
                      className={`flex items-center justify-between rounded-2xl border p-3 ${
                        q.correctAnswer === true
                          ? 'border-green-500 bg-green-50 text-green-900 font-medium'
                          : 'border-slate-100 bg-slate-50 text-slate-500'
                      }`}
                    >
                      <span className="font-bold">Đúng</span>
                      {q.correctAnswer === true && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                    </div>
                    <div
                      className={`flex items-center justify-between rounded-2xl border p-3 ${
                        q.correctAnswer === false
                          ? 'border-green-500 bg-green-50 text-green-900 font-medium'
                          : 'border-slate-100 bg-slate-50 text-slate-500'
                      }`}
                    >
                      <span className="font-bold">Sai</span>
                      {q.correctAnswer === false && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                    </div>
                  </div>
                )}

                {q.explanation && (
                  <div className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
                    <span className="font-bold">Giải thích:</span> {q.explanation}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
