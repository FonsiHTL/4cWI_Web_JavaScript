import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-amber-300">Hello!</h1>

    <div className="flex">
      <Card name={"Lukas"}jobtitle={"Schueler"}description={"kann nicht laufen"}/>
      <Card name={"Samuel"}jobtitle={"Schueler"}description={"Zigarillo"}/>
    </div>

  
    </>
  )
}

export default App
