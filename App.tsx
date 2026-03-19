import React, { useEffect, useMemo, useState } from 'react';
import { questions } from './data';
import { Question, QuestionType } from './types';
import { QuizCard } from './components/QuizCard';
import { ResultCard } from './components/ResultCard';
import { ReviewAll } from './components/ReviewAll';
import {
  ArrowRight,
  BookOpen,
  CheckSquare,
  ChevronRight,
  GraduationCap,
  Home,
  RefreshCcw,
  Shuffle,
  Sparkles,
} from 'lucide-react';

type ViewState = 'MENU' | 'QUIZ' | 'RESULT' | 'REVIEW';

type ResumeDraft = {
  version: 1;
  activeQuestionIds: string[];
  currentIndex: number;
  score: number;
  wrongQuestionIds: string[];
  selectedAnswer: string | boolean | null;
  showFeedback: boolean;
  lastSelectedType: QuestionType | 'ALL';
  isShuffle: boolean;
  questionCount: number | 'ALL';
  savedAt: number;
};

const PROGRESS_STORAGE_KEY = 'tinhoc12_quiz_resume_v1';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('MENU');

  // Quiz Configuration State
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [lastSelectedType, setLastSelectedType] = useState<QuestionType | 'ALL'>('ALL');
  const [isShuffle, setIsShuffle] = useState(false);
  const [questionCount, setQuestionCount] = useState<number | 'ALL'>('ALL');

  // Quiz Progress State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);

  const [resumeDraft, setResumeDraft] = useState<ResumeDraft | null>(null);

  const currentQuestion = activeQuestions[currentIndex];

  const buildDraftFromCurrentState = (): ResumeDraft => ({
    version: 1,
    activeQuestionIds: activeQuestions.map((q) => q.id),
    currentIndex,
    score,
    wrongQuestionIds: wrongQuestions.map((q) => q.id),
    selectedAnswer,
    showFeedback,
    lastSelectedType,
    isShuffle,
    questionCount,
    savedAt: Date.now(),
  });

  const clearResumeDraft = () => {
    try {
      window.localStorage.removeItem(PROGRESS_STORAGE_KEY);
    } catch {
      // ignore
    }
    setResumeDraft(null);
  };

  const readResumeDraft = (): ResumeDraft | null => {
    try {
      const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (!raw) return null;

      const parsed = JSON.parse(raw) as Partial<ResumeDraft>;
      if (parsed.version !== 1) return null;

      if (!Array.isArray(parsed.activeQuestionIds) || parsed.activeQuestionIds.length === 0) return null;
      if (typeof parsed.currentIndex !== 'number') return null;
      if (typeof parsed.score !== 'number') return null;
      if (!Array.isArray(parsed.wrongQuestionIds)) return null;
      if (typeof parsed.showFeedback !== 'boolean') return null;

      if (parsed.lastSelectedType !== 'ALL' && parsed.lastSelectedType !== 'MCQ' && parsed.lastSelectedType !== 'TF') {
        return null;
      }
      if (typeof parsed.isShuffle !== 'boolean') return null;
      if (parsed.questionCount !== 'ALL' && typeof parsed.questionCount !== 'number') return null;

      return parsed as ResumeDraft;
    } catch {
      return null;
    }
  };

  const restoreFromDraft = (draft: ResumeDraft) => {
    const restoredActiveQuestions = draft.activeQuestionIds
      .map((id) => questions.find((q) => q.id === id))
      .filter((q): q is Question => Boolean(q));

    if (restoredActiveQuestions.length !== draft.activeQuestionIds.length) {
      // Data has changed (or draft is stale) => discard.
      clearResumeDraft();
      return;
    }

    if (draft.currentIndex < 0 || draft.currentIndex >= restoredActiveQuestions.length) {
      clearResumeDraft();
      return;
    }

    const restoredWrongQuestions = draft.wrongQuestionIds
      .map((id) => questions.find((q) => q.id === id))
      .filter((q): q is Question => Boolean(q));

    setLastSelectedType(draft.lastSelectedType);
    setIsShuffle(draft.isShuffle);
    setQuestionCount(draft.questionCount);
    setActiveQuestions(restoredActiveQuestions);
    setWrongQuestions(restoredWrongQuestions);
    setCurrentIndex(draft.currentIndex);
    setScore(draft.score);
    setSelectedAnswer(draft.selectedAnswer);
    setShowFeedback(draft.showFeedback);
    setView('QUIZ');
  };

  const availableQuestionCount = useMemo(
    () => ({
      ALL: questions.length,
      MCQ: questions.filter((question) => question.type === 'MCQ').length,
      TF: questions.filter((question) => question.type === 'TF').length,
    }),
    []
  );

  const shuffleArray = (array: Question[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const startQuiz = (type: QuestionType | 'ALL') => {
    clearResumeDraft();
    setLastSelectedType(type);
    let q = type === 'ALL' ? questions : questions.filter((question) => question.type === type);

    if (isShuffle) {
      q = shuffleArray(q);
    }

    if (questionCount !== 'ALL') {
      q = q.slice(0, questionCount);
    }

    setActiveQuestions(q);
    setWrongQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setView('QUIZ');
  };

  useEffect(() => {
    // Load a previously saved "làm dở" session (story-style resume).
    try {
      const draft = readResumeDraft();
      setResumeDraft(draft);
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Keep saving current progress while the user is actively doing the quiz.
    if (view !== 'QUIZ' || activeQuestions.length === 0) return;
    try {
      const draft = buildDraftFromCurrentState();
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(draft));
    } catch {
      // ignore
    }
  }, [view, activeQuestions, currentIndex, score, selectedAnswer, showFeedback, wrongQuestions, lastSelectedType, isShuffle, questionCount]);

  const handleReviewWrong = () => {
    if (wrongQuestions.length === 0) {
      setView('RESULT');
      return;
    }

    setActiveQuestions(wrongQuestions);
    setWrongQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setView('QUIZ');
  };

  const handleAnswerSelect = (answer: string | boolean) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongQuestions((prev) => [...prev, currentQuestion]);
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      clearResumeDraft();
      setView('RESULT');
    }
  };

  const handleRetry = () => {
    startQuiz(lastSelectedType);
  };

  const handleHome = () => {
    if (view === 'QUIZ' && activeQuestions.length > 0) {
      // Save progress before leaving (so we can resume later like watch story).
      const draft = buildDraftFromCurrentState();
      try {
        window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(draft));
      } catch {
        // ignore
      }
      setResumeDraft(draft);
    }

    if (view === 'RESULT') {
      clearResumeDraft();
    }

    setView('MENU');
  };

  const currentProgress =
    activeQuestions.length > 0
      ? Math.round(((currentIndex + (showFeedback ? 1 : 0)) / activeQuestions.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_48%,_#eef4ff_100%)] flex flex-col">
      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div
            className="flex items-center gap-2 text-blue-700 transition-opacity hover:opacity-80"
            onClick={handleHome}
            role="button"
            tabIndex={0}
          >
            <GraduationCap className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">
              TinHoc12<span className="font-light text-slate-400">ÔnTập</span>
            </span>
          </div>

          {view === 'QUIZ' && activeQuestions.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="hidden rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500 sm:flex">
                Câu {currentIndex + 1} / {activeQuestions.length}
              </div>
              <div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {currentProgress}% hoàn thành
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:px-6 md:py-10">
        {view === 'MENU' && (
          <div className="flex flex-1 flex-col gap-5 animate-in fade-in duration-500 md:gap-6">
            {resumeDraft && (
              <section className="rounded-[24px] border border-blue-100 bg-blue-50/60 p-5 shadow-[0_18px_45px_-30px_rgba(30,64,175,0.25)] md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold text-blue-800">
                      Bạn đang làm đến câu {resumeDraft.currentIndex + 1}/{resumeDraft.activeQuestionIds.length}
                    </p>
                    <p className="mt-1 text-slate-700">
                      Có muốn làm tiếp không?
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => resumeDraft && restoreFromDraft(resumeDraft)}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
                    >
                      Làm tiếp
                    </button>
                    <button
                      onClick={() => {
                        // Discard the draft + reset current in-memory quiz state.
                        clearResumeDraft();
                        setActiveQuestions([]);
                        setCurrentIndex(0);
                        setScore(0);
                        setSelectedAnswer(null);
                        setShowFeedback(false);
                        setWrongQuestions([]);
                      }}
                      className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Bỏ qua
                    </button>
                  </div>
                </div>
              </section>
            )}

            <section className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.85fr)] md:gap-6">
              <div className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96),_rgba(239,246,255,0.92))] p-5 shadow-[0_24px_60px_-32px_rgba(37,99,235,0.45)] md:rounded-[28px] md:p-7">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
                <div className="relative max-w-3xl space-y-3.5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-[11px] font-semibold text-blue-700 md:px-3.5 md:py-1.5 md:text-xs">
                    <Sparkles className="h-3.5 w-3.5" />
                    Luyện đề mượt hơn, tập trung hơn
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-[2.15rem] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[2.45rem] md:text-[3.1rem]">
                      Ôn tập giữa kỳ 2 Tin học 12
                    </h1>
                    <p className="max-w-xl text-[15px] leading-7 text-slate-600 md:text-base md:leading-7">
                    Sáng sớm thức dậy anh bỗng thấy mình quá đẹp trai
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 md:max-w-lg md:gap-3">
                    <div className="rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm">
                      <p className="text-lg font-bold text-slate-900 md:text-xl">{availableQuestionCount.ALL}</p>
                      <p className="text-xs text-slate-500 md:text-sm">Tổng số câu</p>
                    </div>
                    <div className="rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm">
                      <p className="text-lg font-bold text-slate-900 md:text-xl">{availableQuestionCount.MCQ}</p>
                      <p className="text-xs text-slate-500 md:text-sm">ABCD</p>
                    </div>
                    <div className="rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm">
                      <p className="text-lg font-bold text-slate-900 md:text-xl">{availableQuestionCount.TF}</p>
                      <p className="text-xs text-slate-500 md:text-sm">Đúng/Sai</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.45)] backdrop-blur md:rounded-[28px] md:p-6">
                <h2 className="text-lg font-bold text-slate-900">Thiết lập nhanh</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Chọn số câu và cách ra đề trước khi vào bài.
                </p>

                <div className="mt-5 space-y-3.5">
                  <div
                    onClick={() => setIsShuffle(!isShuffle)}
                    className="group flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 transition-all hover:border-blue-300 hover:bg-blue-50/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-white p-2 text-slate-700 shadow-sm">
                        <Shuffle className={`h-5 w-5 ${isShuffle ? 'text-blue-600' : 'text-slate-400'}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">Trộn ngẫu nhiên câu hỏi</p>
                        <p className="text-sm text-slate-500">Luyện phản xạ tốt hơn.</p>
                      </div>
                    </div>
                    <div className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${isShuffle ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-slate-400'}`}>
                      <div className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${isShuffle ? 'translate-x-5' : 'translate-x-0'}`} />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                    <label htmlFor="question-count" className="mb-2 block text-sm font-semibold text-slate-700">
                      Số lượng câu
                    </label>
                    <select
                      id="question-count"
                      value={questionCount}
                      onChange={(e) =>
                        setQuestionCount(
                          e.target.value === 'ALL' ? 'ALL' : Number(e.target.value)
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="ALL">Tất cả ({questions.length})</option>
                      <option value={30}>30 câu</option>
                      <option value={40}>40 câu</option>
                      <option value={50}>50 câu</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {!resumeDraft && wrongQuestions.length > 0 && (
              <button
                onClick={handleReviewWrong}
                className="flex w-full items-center justify-between gap-4 rounded-[24px] border border-orange-200 bg-[linear-gradient(135deg,_#fff7ed,_#ffffff)] px-5 py-4 text-left shadow-[0_16px_36px_-28px_rgba(234,88,12,0.6)] transition-all hover:border-orange-300 hover:bg-orange-50 md:rounded-[28px] md:px-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-orange-100 p-3 text-orange-700">
                    <RefreshCcw className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 md:text-lg">Ôn lại câu sai</p>
                    <p className="text-sm text-slate-500">Tiếp tục luyện {wrongQuestions.length} câu bạn đã làm sai trước đó.</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-orange-600" />
              </button>
            )}

            <div className="grid w-full gap-4 md:grid-cols-2 md:gap-6">
              <button
                onClick={() => startQuiz('MCQ')}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white/90 p-6 text-left shadow-[0_20px_50px_-32px_rgba(37,99,235,0.45)] backdrop-blur transition-all duration-300 hover:border-blue-400 hover:shadow-[0_25px_55px_-28px_rgba(37,99,235,0.55)] md:rounded-[28px] md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                  <CheckSquare className="h-32 w-32 text-blue-600" />
                </div>
                <div className="w-fit rounded-2xl bg-blue-100 p-3 text-blue-700">
                  <CheckSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-slate-900">Trắc nghiệm ABCD</h3>
                  <p className="text-sm leading-6 text-slate-500">
                    Luyện nhanh theo nhóm câu hỏi chọn đáp án. Hợp lý khi muốn kiểm tra độ nhớ
                    kiến thức và tốc độ làm bài.
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                    {availableQuestionCount.MCQ} câu
                  </span>
                  <div className="flex items-center font-medium text-blue-600 transition-transform group-hover:translate-x-1">
                    Bắt đầu ngay <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </button>

              <button
                onClick={() => startQuiz('TF')}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white/90 p-6 text-left shadow-[0_20px_50px_-32px_rgba(234,88,12,0.4)] backdrop-blur transition-all duration-300 hover:border-orange-400 hover:shadow-[0_25px_55px_-28px_rgba(234,88,12,0.5)] md:rounded-[28px] md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400" />
                <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                  <BookOpen className="h-32 w-32 text-orange-600" />
                </div>
                <div className="w-fit rounded-2xl bg-orange-100 p-3 text-orange-700">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-slate-900">Đúng / Sai</h3>
                  <p className="text-sm leading-6 text-slate-500">
                    Phù hợp để rà kỹ khái niệm và chi tiết. Dạng này giúp phát hiện nhanh những
                    phần đang hiểu chưa chắc.
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                    {availableQuestionCount.TF} câu
                  </span>
                  <div className="flex items-center font-medium text-orange-600 transition-transform group-hover:translate-x-1">
                    Bắt đầu ngay <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </button>
            </div>

            <div className="grid gap-4 md:gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <button
                onClick={() => startQuiz('ALL')}
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-[24px] bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 p-5 text-left shadow-[0_24px_60px_-28px_rgba(30,64,175,0.65)] transition-all duration-300 hover:shadow-[0_28px_65px_-26px_rgba(30,64,175,0.72)] sm:p-6 md:rounded-[28px] md:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_30%)]" />
                <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20 group-hover:scale-110">
                  <BookOpen className="h-48 w-48 text-white" />
                </div>
                <div className="relative z-10 pr-4">
                  <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                    Làm tổng hợp toàn bộ câu hỏi
                  </h3>
                  <p className="text-base leading-7 text-blue-100 sm:text-lg">
                    Nên dùng sau khi đã luyện từng dạng riêng để kiểm tra mức độ sẵn sàng trước
                    bài kiểm tra.
                  </p>
                </div>
                <div className="relative z-10 shrink-0 rounded-full bg-white/15 p-4 text-white transition-colors group-hover:bg-white/25">
                  <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-1" />
                </div>
              </button>

              <button
                onClick={() => setView('REVIEW')}
                className="group flex min-h-[180px] w-full flex-col justify-between rounded-[24px] border border-slate-200 bg-white/95 p-6 text-left shadow-[0_18px_45px_-30px_rgba(15,23,42,0.5)] transition-all hover:border-blue-300 hover:bg-blue-50/40 md:rounded-[28px] md:p-8"
              >
                <div className="w-fit rounded-2xl bg-slate-100 p-3 text-slate-700 transition-colors group-hover:bg-blue-100 group-hover:text-blue-700">
                  <CheckSquare className="h-6 w-6" />
                </div>
                <div className="mt-5">
                  <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Xem lại toàn bộ câu hỏi và đáp án</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
                    Mở danh sách đầy đủ để học theo chuyên đề và rà đáp án nhanh hơn.
                  </p>
                </div>
                <div className="mt-6 flex items-center font-semibold text-blue-700 transition-transform group-hover:translate-x-1">
                  Mở ngay <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </button>
            </div>
          </div>
        )}

        {view === 'REVIEW' && <ReviewAll onBack={handleHome} />}

        {view === 'QUIZ' && currentQuestion && (
          <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center">
            <div className="mb-8 w-full">
              <div className="mb-3 flex items-center justify-between gap-4 text-sm text-slate-500">
                <span className="font-medium">Tiến độ làm bài</span>
                <div className="flex items-center gap-3">
                  <span>
                    {Math.min(currentIndex + 1, activeQuestions.length)} / {activeQuestions.length}
                  </span>
                  <button
                    onClick={handleHome}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2 font-semibold text-slate-600 transition-colors hover:bg-white"
                  >
                    <Home className="h-4 w-4" />
                    Quay về trang chủ
                  </button>
                </div>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200/80">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out"
                  style={{ width: `${currentProgress}%` }}
                />
              </div>
            </div>

            <QuizCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onSelect={handleAnswerSelect}
              showFeedback={showFeedback}
            />

            <div className="mt-8 flex w-full justify-end">
              <button
                onClick={handleNext}
                disabled={!showFeedback}
                className={`flex items-center rounded-2xl px-8 py-3 font-bold shadow-lg transition-all transform ${
                  showFeedback
                    ? 'bg-slate-900 text-white shadow-slate-300 hover:-translate-y-1 hover:bg-slate-800'
                    : 'cursor-not-allowed bg-slate-200 text-slate-400'
                }`}
              >
                {currentIndex < activeQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {view === 'QUIZ' && !currentQuestion && (
          <div className="flex flex-1 items-center justify-center">
            <div className="max-w-md rounded-[28px] border border-slate-200 bg-white/90 p-8 text-center shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)]">
              <h2 className="text-2xl font-bold text-slate-900">Chưa có câu hỏi để hiển thị</h2>
              <p className="mt-3 leading-7 text-slate-500">
                Bộ câu hỏi của lượt này đang trống. Bạn có thể quay về màn hình chính để chọn lại
                chế độ làm bài.
              </p>
              <button
                onClick={handleHome}
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Về màn hình chính
              </button>
            </div>
          </div>
        )}

        {view === 'RESULT' && (
          <div className="flex flex-1 items-center justify-center">
            <ResultCard
              score={score}
              total={activeQuestions.length}
              wrongCount={wrongQuestions.length}
              onRetry={handleRetry}
              onHome={handleHome}
              onReviewWrong={handleReviewWrong}
            />
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        <p>Ôn tập ổn định từng phần, rồi mới tăng dần độ khó để đạt hiệu quả tốt hơn.</p>
      </footer>
    </div>
  );
};

export default App;
