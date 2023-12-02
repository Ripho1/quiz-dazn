import { QuizWithData } from './components/quiz/QuizWithData'
import { BeginButton } from './components/button/BeginButton'
import { Result } from './components/result/Result'

import './App.css'

function App() {
    // In the future the theme should be from a store and storage
    return <div className="app" data-theme={"dark"}> 

        <BeginButton className="begin-button-position" />

        <QuizWithData className="quiz-position" />

        <Result className="results-position" />

    </div>
}
export default App