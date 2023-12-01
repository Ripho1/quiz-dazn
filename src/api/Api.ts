import { CurrentQuestionIndex, QuizStore, QuizzesStore, CorrectAnswersStore, TimerStore } from "../stores/data/DataStores"
import { Questions } from "./Questions"

/**
 * Returns the random questions
 */
export async function getQuestions() {
    // In future, get from server
    return _fromClient()
}

/**
 * Gets the random questions and put the relevant info in the stores
 */
export async function beginQuiz() {
    try {
        const questions = await getQuestions()

        QuizzesStore.Set(questions)
        QuizStore.Set(questions[0])
        CurrentQuestionIndex.Set(0)
        TimerStore.advanceTimer()
    } catch (error) {
        alert("Try again later :(")
        console.log(error)
    }
}

export function quizOptionSelected(questionID: number, optionIndex: number) {
    const currentQuestion = QuizStore.GetCurrent()

    if (currentQuestion) {
        if (currentQuestion.answer_index == optionIndex) {
            CorrectAnswersStore.IncreaseBy()
        }

        _advanceQuestion()
    }
}

/**
 * Timer ran out so leaving the correct answer highlighted for a second and moving on
 */
export function ranOutOfTime() {
    TimerStore.stopTimer()

    setTimeout(() => {
        _advanceQuestion()
    }, 1000)
}

/**
 * Going for the next question involves - 
 * question index increase,
 * setting the next question,
 * resetting the timer
 */
function _advanceQuestion() {
    CurrentQuestionIndex.IncreaseBy()
    const newQuestionIndex = CurrentQuestionIndex.GetCurrent()

    if (newQuestionIndex) {
        QuizStore.Set(QuizzesStore.GetCurrent()?.[newQuestionIndex])
    }

    TimerStore.restartTimer()
}

/**
 * Getting random 5 questions from the client
 */
function _fromClient() {
    const questionsToGet = 5
    const chosens = []

    for (let i = 0; i < questionsToGet; i++) {
        chosens.push(Questions[i])
    }

    return chosens
}