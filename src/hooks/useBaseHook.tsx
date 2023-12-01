import { useEffect, useState } from "react"
import { BaseStore } from "../stores/base/BaseStore"

/**
 * Base General Hook to wrap specific hooks
 */
export function useBaseHook<dataType>(store: BaseStore<dataType>) {
    const [data, setData] = useState(store.GetCurrent())

    useEffect(() => {
        // setData(store.GetCurrent())
        const token = store.Subscribe(setData)

        return () => {
            store.Unsubscribe(token)
        }
    }, [])

    return data
}