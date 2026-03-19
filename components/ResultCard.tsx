import React from 'react';
import { BookX, Home, RotateCcw, Target, Trophy } from 'lucide-react';

interface ResultCardProps {
  score: number;
  total: number;
  wrongCount: number;
  onRetry: () => void;
  onHome: () => void;
  onReviewWrong: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  score,
  total,
  wrongCount,
  onRetry,
  onHome,
  onReviewWrong,
}) => {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  let message = 'Cần cố gắng hơn!';
  let color = 'text-red-600';
  let accent = 'from-red-500 to-orange-500';

  if (percentage >= 90) {
    message = 'Xuất sắc!';
    color = 'text-yellow-600';
    accent = 'from-yellow-400 to-amber-500';
  } else if (percentage >= 70) {
    message = 'Làm tốt lắm!';
    color = 'text-green-600';
    accent = 'from-emerald-400 to-green-500';
  } else if (percentage >= 50) {
    message = 'Đạt yêu cầu';
    color = 'text-blue-600';
    accent = 'from-blue-500 to-cyan-500';
  }

  return (
    <div className="mx-auto max-w-xl rounded-[30px] border border-white/70 bg-white/95 p-8 text-center shadow-[0_28px_80px_-42px_rgba(15,23,42,0.55)] animate-in zoom-in-95 duration-300 md:p-10">
      <div className="mb-6 flex justify-center">
        <div className={`rounded-full bg-gradient-to-br ${accent} p-[1px]`}>
          <div className="rounded-full bg-white p-6">
            <Trophy className={`h-16 w-16 ${color} ${percentage >= 90 ? 'animate-bounce' : ''}`} />
          </div>
        </div>
      </div>

      <h2 className="mb-2 text-3xl font-bold text-slate-900">{message}</h2>
      <p className="mb-8 text-slate-500">Bạn đã hoàn thành bài ôn tập. Đây là kết quả của lượt hiện tại.</p>

      <div className="mb-8 rounded-[26px] bg-slate-50 p-6">
        <div className="flex items-end justify-center gap-2">
          <span className={`text-6xl font-bold ${color}`}>{score}</span>
          <span className="mb-2 text-xl font-medium text-slate-400">/ {total}</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
              <Target className="h-4 w-4" />
              Tỷ lệ đúng
            </div>
            <p className={`mt-2 text-2xl font-bold ${color}`}>{percentage}%</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">Câu sai cần ôn</div>
            <p className="mt-2 text-2xl font-bold text-slate-900">{wrongCount}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {wrongCount > 0 && (
          <button
            onClick={onReviewWrong}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-3.5 font-semibold text-orange-700 transition-colors hover:bg-orange-100"
          >
            <BookX className="h-5 w-5" />
            Ôn lại {wrongCount} câu làm sai
          </button>
        )}

        <button
          onClick={onRetry}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
        >
          <RotateCcw className="h-5 w-5" />
          Làm lại toàn bộ bài này
        </button>

        <button
          onClick={onHome}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-600 transition-all hover:border-slate-300 hover:text-slate-800"
        >
          <Home className="h-5 w-5" />
          Về màn hình chính
        </button>
      </div>
    </div>
  );
};
