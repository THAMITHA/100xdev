import {useState, memo} from 'react'
function App(){
  const [count, setCount] = useState(0)
  return <div>
  <ButtonComponent/>
  <button onClick={function(){
    setCount(count+1)
  }}>Counter {count}</button>
  </div>
}
const ButtonComponent= memo(function(){
  console.log('child render')
  return <>
  <button>click me</button>
  </>
})
export default App