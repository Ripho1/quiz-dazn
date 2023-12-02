import { beginQuiz } from "../../api/Api"
import { useQuiz } from "../../hooks/useQuiz"
import { Button, ButtonProps } from "./Button"

interface BeginButtonProps extends ButtonProps { }

/**
 * Render the begin button only if a quiz is not active
 */
export const BeginButton = ({onClick, ...props}: BeginButtonProps) => {
    const quiz = useQuiz()

    return !quiz ?
        <Button {...props} onClick={beginQuiz}>
            Begin Quiz!
        </Button>
        : <></>
}