/**
 * Quiz's type - question and their choices
 */
export type Question = {
    question_id: number,
    question: string,
    answer_index: number
    choices: string[]
    hint: string
}

/**
 * Used to prevent unnecessary renders
 */
export type Token = number

/** 
 * Used in stores to publish changes 
 */
export type Subscribed<DataType> = {
    token: Token,
    setter: (newData: DataType) => void
}