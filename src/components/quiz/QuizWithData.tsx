import { quizOptionSelected, ranOutOfTime } from "../../api/Api"
import { useQuiz } from "../../hooks/useQuiz"
import { useTimer } from "../../hooks/useTimer"
import { MAX_TIME_FOR_QUESTION } from "../../stores/data/DataStores"
import { Quiz } from "./Quiz"

interface QuizDataProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Wraps the quiz component and adds in the data via props
 */
export const QuizWithData = (props: QuizDataProps) => {
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
        {...props}
    />
}