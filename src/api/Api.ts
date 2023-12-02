import { Question } from "../Types"
import { CurrentQuestionIndex, QuizStore, QuizzesStore, CorrectAnswersCounterStore, TimerStore, ShowResultsStore } from "../stores/data/DataStores"
import { Questions } from "./Questions"

/**
 * Returns the random questions
 */
export async function getQuestions() {
    // In future, get from server
    return _fromClient()
}

/**
 * Gets the random questions and resets info in the stores
 */
export async function beginQuiz() {
    try {
        const questions = await getQuestions()

        QuizzesStore.Set(questions)
        QuizStore.Set(questions[0])
        CurrentQuestionIndex.Set(0)
        TimerStore.RestartTimer()
        ShowResultsStore.Set(false)
        CorrectAnswersCounterStore.Set(0)
    } catch (error) {
        alert("Try again later :(")
        console.log(error)
    }
}

export function quizOptionSelected(questionID: number, optionIndex: number) {
    const currentQuestion = QuizStore.GetCurrent()

    if (currentQuestion) {
        if (currentQuestion.answer_index == optionIndex) {
            CorrectAnswersCounterStore.IncreaseBy()
        }

        _advanceQuestion()
    }
}

/**
 * Timer ran out so leaving the correct answer highlighted for a second and moving on
 */
export function ranOutOfTime() {
    TimerStore.StopTimer()

    setTimeout(() => {
        _advanceQuestion()
    }, 1000)
}

/**
 * Going for the next question involves - 
 * question index increase,
 * setting the next question,
 * restarting the timer
 */
function _advanceQuestion() {
    CurrentQuestionIndex.IncreaseBy()
    const newQuestionIndex = CurrentQuestionIndex.GetCurrent()

    if (newQuestionIndex) {
        const nextQuiz = QuizzesStore.GetCurrent()?.[newQuestionIndex]
        QuizStore.Set(nextQuiz)

        // If there is not a current question we show the results
        ShowResultsStore.Set(!nextQuiz)
    }

    TimerStore.RestartTimer()
}

/**
 * Getting random 5 questions from the client
 */
function _fromClient() {
    const questionsToGet = 5
    const chosens: Question[] = []

    while(chosens.length < questionsToGet) {
        const randomIndex = Math.floor(Math.random() * Questions.length)
        const randomQ = Questions[randomIndex]

        if (chosens.find(q => q.question_id == randomQ.question_id) == undefined) {
            chosens.push(randomQ)
        }
    }

    return chosens
}