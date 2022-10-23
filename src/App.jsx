import './App.css'
import Card from './components/Card'
import quotes from './quotes.json'

function App() {
  return (
    <div>
      <Card quotes={quotes} />
    </div>
  )
}

export default App
