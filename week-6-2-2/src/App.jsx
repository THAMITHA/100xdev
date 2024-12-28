import { useMemo, useState } from "react"

function App(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)  
  let count = useMemo(()=>{
    let finalValue=0
    for(let i=1; i<=inputValue; i++){
      finalValue = finalValue + i
    }
    return finalValue
  },[inputValue])
  return <>
  <input type="text" onChange={function(e){
    setInputValue(e.target.value)
  }} placeholder="{please enter value of n}"></input>
  Sum of 1 to {inputValue} is {count}
  <button onClick={function(){
    setCounter(counter + 1)
  }}>Counter ({counter})</button>
  </>
}

export default App