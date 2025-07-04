import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    console.log("Added", Math.random());
    let count2 = (counter+1 > 20) ? 20 : (counter+1)
    setCounter(count2)
  }
  const removeValue = () => {
    console.log("Removed", Math.random());
    let count1 = (counter-1 < 0) ? 0 : (counter-1)
    setCounter(count1)
  }

  return (
    <>
      <h1>COUNTER </h1>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
