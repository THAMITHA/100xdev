import {useState} from 'react'
function App(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  let count = 0
  for(let i=1; i<=inputValue; i++){
    count = count + i 
  }
  return <>
    <input type="text" onChange = {(e)=>
      setInputValue(e.target.value)
    } placeholder='enter the number'></input><br/>
    Sum for 1 to {inputValue} is {count}<br/>
    <button onClick={()=>
      setCounter(counter+1)
    }>Counter ({counter})</button>
   </>
}

export default App