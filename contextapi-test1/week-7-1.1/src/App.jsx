import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function Buttons({count, setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>decrease</button>
  </div>
}

function Count({count}){
  return <div>{count}</div>
}

export default App
