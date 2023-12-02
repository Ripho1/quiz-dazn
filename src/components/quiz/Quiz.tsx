import { Question } from "../../Types"
import { Circle } from "../circle/Circle"
import { Option } from "../options/Option"
import { Options } from "../options/Options"

import "./Quiz.css"

interface QuizProps extends React.HTMLAttributes<HTMLDivElement> {
    question?: Question,
    hightlightCorrect?: boolean,
    showHint?: boolean,
    onOptionClick?: (questionID: number, id: number) => void,
    secondsLeft?: number
}

/**
 * Quiz component presenting the data from props
 */
export const Quiz = ({ className, question, secondsLeft = 0, hightlightCorrect = false, showHint = false, onOptionClick, ...props }: QuizProps) => {
    return question ?
        <div className={`quiz-container ${className}`} {...props}>
            <div className="question">{question.question}</div>
            <div className={`hint ${showHint || "hidden"}`}>{question.hint}</div>
            <div className="timer">
                <Circle className="circle-background">
                    {secondsLeft}
                </Circle>
            </div>

            <Options className="options-container">
                {
                    question.choices.map((choice, index) =>
                        <Option
                            key={index}
                            className="quiz-option"
                            onClick={() => !hightlightCorrect && onOptionClick?.(question.question_id, index)}
                            highlight={hightlightCorrect && index == question.answer_index}
                            preventPointer={hightlightCorrect}
                        >
                            {choice}
                        </Option>
                    )
                }
            </Options>
        </div>
        : <></>
}