import { useBaseHook } from "./useBaseHook"
import { TimerStore } from "../stores/data/DataStores"

export const useTimer = () => useBaseHook(TimerStore)
