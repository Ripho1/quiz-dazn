import { CurrentQuestionIndex, QuizStore, QuizzesStore } from "../stores/data/DataStores"
import { useBaseHook } from "./useBaseHook"

export const useQuiz = () => useBaseHook(QuizStore)
export const useQuizzes = () => useBaseHook(QuizzesStore)
export const useCurrentQuestionIndex = () => useBaseHook(CurrentQuestionIndex)
