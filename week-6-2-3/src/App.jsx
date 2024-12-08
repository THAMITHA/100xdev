import { useState, memo, useCallback } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

 const a = useCallback(function(){
  console.log('hi thier!')
}, [])

  return (
    <>
    <button onClick={function(){
      setCount(count+1)
    }}>Counter ({count})</button>
    <Demo a={a}></Demo>
    </>
  )
}

const Demo = memo(function({a}){
  console.log('rendering')
  return <>
    hi thier
  </>
})

export default App
