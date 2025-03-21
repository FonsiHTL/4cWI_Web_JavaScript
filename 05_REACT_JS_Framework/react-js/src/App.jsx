import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-amber-300">Hello!</h1>

    <div className="flex">
      <Card name={"Lukas"}jobtitle={"Schueler"}description={"kann nicht laufen"}/>
      <Card name={"Samuel"}jobtitle={"Schueler"}description={"Zigarillo"}/>
    </div>

    <div className="flex">
      <Button title={"button"}/>
    </div>

    <div className="flex">
      <List/>
    </div>
  
    </>
  )
}

export default App
