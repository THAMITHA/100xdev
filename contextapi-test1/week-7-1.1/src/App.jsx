import { useContext, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
  <CountRenderer />
  <Buttons />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector)
  return <div>
      {isEven ? "It is even": null}
    </div>
}
function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(count => count+1)
    }}>increase</button>
    <button onClick={()=>{
      setCount(count => count-1)
    }}>decrease</button>
  </div>
}

export default App
