import { Questions } from "../../Questions"
import { Question } from "../../Types"
import { Circle } from "../circle/Circle"
import { Option } from "../options/Option"
import { Options } from "../options/Options"

import "./Quiz.css"

interface QuizProps extends React.HTMLAttributes<HTMLDivElement> {
    question?: Question,
    hightlightCorrect?: boolean,
    showHint?: boolean,
    onOptionClick?: (id: number) => void
}

/**
 * Quiz component presenting the data from props
 * TODO change stub to props
 */
export const Quiz = ({ className, question, hightlightCorrect = false, showHint = false, onOptionClick, ...props }: QuizProps) => {
    return (
        true ?
            <div className={`quiz-container ${className}`} {...props}>
                <div className="question">{quizQuestion.question}</div>
                <div className={`hint ${showHint || "hidden"}`}>{quizQuestion.hint}</div>
                <div className="timer">
                    <Circle className="circle-background">
                        14
                    </Circle>
                </div>

                <Options className="options-container">
                    {
                        quizQuestion.choices.map((choice, index) =>
                            <Option
                                key={index}
                                className="quiz-option"
                                onClick={() => !hightlightCorrect && onOptionClick?.(index)}
                                highlight={hightlightCorrect && index == quizQuestion.answer_index}
                                preventPointer={hightlightCorrect}
                            >
                                {choice}
                            </Option>
                        )
                    }
                </Options>
            </div>
            : <></>
    )
}

const quiz2AnswersIndex = 0 // Let flex handle
const quiz3AnswersIndex = 1 // add unclickable empty option
const quiz4AnswersIndex = 2 // let flex handle

const quizQuestion = Questions[quiz4AnswersIndex]