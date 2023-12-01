import { Token } from "../../Types"

export interface IStore<DataType> {
    Subscribe: (setter: (newData: DataType | undefined) => void) => Token,
    Unsubscribe: (token: Token) => boolean,
    Set: (newData: DataType | undefined) => boolean,
    GetCurrent: () => DataType | undefined
}