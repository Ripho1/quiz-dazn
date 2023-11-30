import Questions from "../../Questions"
import { Circle } from "../circle/Circle"
import "./Quiz.css"

interface QuizProps extends React.HTMLAttributes<HTMLDivElement> { }

/**
 * Quiz component presenting the data from props
 * TODO change stub to props
 */
export const Quiz = ({ className, ...props }: QuizProps) => {
    return (
        <div className={`quiz-container ${className}`} {...props}>
            <div className="question">{quizQuestion.question}</div>
            <div className="hint">{quizQuestion.hint}</div>
            <div className="timer">
                <Circle className="circle-background">
                    14
                </Circle>
            </div>

            {/* TODO change to component */}
            <div className="options" style={{ flex: 5 }}>
                {
                    quizQuestion.choices.map(choice =>
                        <div className="option">{choice}</div>
                    )
                }
            </div>
        </div>
    )
}

const quiz2AnswersIndex = 0 // Let flex handle
const quiz3AnswersIndex = 1 // add unclickable empty option
const quiz4AnswersIndex = 2 // let flex handle

const quizQuestion = Questions[quiz3AnswersIndex]