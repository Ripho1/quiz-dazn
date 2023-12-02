import { Subscribed, Token } from "../../Types"
import { IStore } from "./IStore"

/**
 * Base implementation for stores
 */
export abstract class BaseStore<DataType> implements IStore<DataType> {
    // In hindsight I should have implemented the stores to be id-based to support multiple quizzes at the same time 
    private listeners: Subscribed<DataType | undefined>[] = []
    protected data?: DataType

    /**
     * Accepts a Setter (From react hook for instance) and adds it to 
     * the listeners list, and returning a Token to clean up event listener
     * at the end
     */
    Subscribe(setter: (newData: DataType | undefined) => void): Token {
        const token: Token = Date.now()

        this.listeners.push({
            setter,
            token
        })

        return token
    }

    /**
     * Remove a specific listener based on Token.
     * Returns if removed
     */
    Unsubscribe(token: Token): boolean {
        const indexToRemove = this.listeners.findIndex(subscribed => {
            return subscribed.token === token
        })

        if (indexToRemove >= 0 && indexToRemove < this.listeners.length) {
            const removed = this.listeners.splice(indexToRemove, 1)

            if (removed.length > 0) {
                return true
            }
        }

        return false
    }

    /**
     * Sets a specific change to all the listeners
     */
    Set(newData: DataType | undefined): boolean {
        try {
            if (this.listeners.length > 0) {
                this.listeners.forEach(subscribed => {
                    subscribed.setter(newData)
                })

            }
            this.data = newData

            return true
        } catch (error) {
            return false
        }
    }
    
    /**
     * Returns the current data in the store
     */
    GetCurrent = () => {
        return this.data
    }
}