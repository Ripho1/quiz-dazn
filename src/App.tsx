import { beginQuiz } from './api/Api'
import { QuizWithData } from './components/quiz/QuizWithData'

import './App.css'

function App() {
    return (
        <div className="App" data-theme={"dark"}>
            <QuizWithData />
        </div>
    )
}

beginQuiz()

export default App