import {useEffect, useState} from 'react'
function useInterval(fn, timeout){
  const value=useEffect(()=>{
    setInterval(()=>{
      fn()
    },timeout)
    return ()=>{
      clearInterval(value)
    }
  },[])
}
function App(){
  const [count, setCount] = useState(0)
  const a = useInterval(()=>{
    setCount(c=>c+1)
  },1000)
  return(
    <>Timer is at {count}</>
  )
}

export default App
