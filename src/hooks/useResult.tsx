import { useBaseHook } from "./useBaseHook"
import { CorrectAnswersCounterStore, ShowResultsStore } from "../stores/data/DataStores"

export const useCorrectAnswersCounter = () => useBaseHook(CorrectAnswersCounterStore)
export const useShowResults = () => useBaseHook(ShowResultsStore)