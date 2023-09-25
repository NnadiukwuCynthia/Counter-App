import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const Increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className='main'>
      <div className='counter'>
        <h1>{count}</h1>
        </div>
        <button onClick={Increment}> Increase</button>
      </div>
    </>
  )
}

export default App
 