import { useCorrectAnswersCounter, useShowResults } from "../../hooks/useResult"

import "./Result.css"

interface ResultProps extends React.HTMLAttributes<HTMLDivElement> { }

/**
 * Showing the result of the quiz only if the quiz has ended
 */
export const Result = ({className, ...props}: ResultProps) => {
    const results = useCorrectAnswersCounter()
    const showResults = useShowResults()

    return showResults ?
        <div className={`results ${className}`} {...props}>
            You have earned {results || 0} points!
        </div>
        : <></>
}