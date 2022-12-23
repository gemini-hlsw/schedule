import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Tonight from './components/Tonight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/tonight">Tonight</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/tonight" element= {<Tonight/>} />
      </Routes>
    </div>
  )
}

export default App
