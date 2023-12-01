import { quizOptionSelected, ranOutOfTime } from "../../api/Api"
import { useQuiz, useTimer } from "../../hooks/useQuiz"
import { MAX_TIME_FOR_QUESTION } from "../../stores/data/DataStores"
import { Quiz } from "./Quiz"

/**
 * Wraps the quiz component and adds in the data via props
 */
export const QuizWithData = () => {
    const quiz = useQuiz()
    const timer = useTimer()

    // Failed the question because ran out of time
    if (timer == 0) {
        ranOutOfTime()
    }

    return <Quiz
        question={quiz}
        secondsLeft={timer}
        hightlightCorrect={timer == 0}
        showHint={Number(timer) <= MAX_TIME_FOR_QUESTION / 2}
        onOptionClick={quizOptionSelected}
    />
}