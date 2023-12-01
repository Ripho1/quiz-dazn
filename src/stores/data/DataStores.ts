import { Question } from "../../Types"
import { BaseStore } from "../base/BaseStore"

export const MAX_TIME_FOR_QUESTION = 10

class CurrentQuestion extends BaseStore<Question> { }

class AllQuestions extends BaseStore<Question[]> { }

class QuestionIndex extends BaseStore<number> {

    IncreaseBy(number = 1) {
        super.Set((this.data || 0) + number)
    }
}

class Results extends BaseStore<number> {

    IncreaseBy(number = 1) {
        super.Set((this.data || 0) + number)
    }
}

class Timer extends BaseStore<number> {
    protected setTimoutID: NodeJS.Timeout | undefined

    constructor() {
        super()
        
        this.data = MAX_TIME_FOR_QUESTION
    }
    
    advanceTimer() {
        this.setTimoutID = setTimeout(() => {
            if (this.data != undefined) {   
                this.Set(this.data - 1)
            } else { // No data so setting it to the initial value
                this.Set(MAX_TIME_FOR_QUESTION)
            }
            
            this.advanceTimer()
        }, 1000)
    }
    
    stopTimer() {
        clearTimeout(this.setTimoutID)
    }

    restartTimer() {
        this.stopTimer()
        this.Set(MAX_TIME_FOR_QUESTION)
        this.advanceTimer()
    }
}

export const QuizStore = new CurrentQuestion()
export const QuizzesStore = new AllQuestions()
export const CurrentQuestionIndex = new QuestionIndex()
export const CorrectAnswersStore = new Results()
export const TimerStore = new Timer()