import {useEffect, useState} from 'react'
function App(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  const [finalValue,setFinalValue] = useState(0)
  let count = 0
  useEffect(()=>{
    for(let i=1; i<=inputValue; i++){
      count = count + i 
    }
    setFinalValue(count)
  }, [inputValue])
  
  return <>
    <input type="text" onChange = {(e)=>
      setInputValue(e.target.value)
    } placeholder='enter the number'></input><br/>
    Sum for 1 to {inputValue} is {finalValue}<br/>
    <button onClick={()=>
      setCounter(counter+1)
    }>Counter ({counter})</button>
   </>
}

export default App