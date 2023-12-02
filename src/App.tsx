import { QuizWithData } from './components/quiz/QuizWithData'
import { BeginButton } from './components/button/BeginButton'
import { Result } from './components/result/Result'

import './App.css'

function App() {
    return <div className="app" data-theme={"dark"}>

        <BeginButton className="begin-button-position" />

        <QuizWithData className="quiz-position" />

        <Result className="results-position" />

    </div>
}
export default App