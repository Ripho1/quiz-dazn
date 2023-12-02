import { Question } from "../../Types"
import { BaseStore } from "../base/BaseStore"

export const MAX_TIME_FOR_QUESTION = 20

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

class ShowResults extends BaseStore<boolean> {}

class Timer extends BaseStore<number> {
    private setTimoutID: NodeJS.Timeout | undefined

    constructor() {
        super()
        
        this.data = MAX_TIME_FOR_QUESTION
    }
    
    private AdvanceTimer() {
        this.setTimoutID = setTimeout(() => {
            if (this.data != undefined) {   
                this.Set(this.data - 1)
            } else { // No data so setting it to the initial value
                this.Set(MAX_TIME_FOR_QUESTION)
            }
            
            this.AdvanceTimer()
        }, 1000)
    }
    
    StopTimer() {
        clearTimeout(this.setTimoutID)
        this.setTimoutID = undefined
    }

    /**
     * Resumes the timer if it was paused
     */
    ResumeTimer() {
        if (!this.setTimoutID) {
            this.AdvanceTimer()
        }
    }

    RestartTimer() {
        this.StopTimer()
        this.Set(MAX_TIME_FOR_QUESTION)
        this.AdvanceTimer()
    }
}

export const QuizStore = new CurrentQuestion()
export const QuizzesStore = new AllQuestions()
export const CurrentQuestionIndex = new QuestionIndex()
export const CorrectAnswersCounterStore = new Results()
export const ShowResultsStore = new ShowResults()
export const TimerStore = new Timer()