import React, {useState, useEffect} from 'react'

function useDebounce(value, timeout){
  const [debounceValue, setDebounceValue] = useState(value)
 useEffect(()=>{
    let timeoutnumber = setTimeout(()=>{
      setDebounceValue(value)
    }, timeout)
    return ()=>{
      clearInterval(timeoutnumber)
    }
  },[value])
  return debounceValue
}
function App(){
  const [inputValue, setInputValue] = useState(0)
  const debounceValue = useDebounce(inputValue, 500)
  return(
    <>
    Debounced value is {debounceValue}
     <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='search...'/>
    </>
  )
}

export default App