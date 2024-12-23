import { useState } from 'react'
import './App.css'
import { jobsAtom, networkAtom, notificationAtom, messagingAtom } from './atom'
import { RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationAtom = useRecoilValue(jobsAtom)
  const messagingNotificationAtom = useRecoilValue(messagingAtom)
  const [notificationJobAtom, setMessagenotificationJobAtom] = useRecoilState(notificationAtom)
  const finalValue = networkNotificationCount>100 ? "99+" : notificationJobAtom
  return (
    <>
    <button>Home</button>
    <button>my network {finalValue}</button>
    <button>Jobs {jobsNotificationAtom}</button>
    <button>Messaging {messagingNotificationAtom}</button>
    <button>Notification {notificationJobAtom}</button>
    <button onClick={()=>{
      setMessagenotificationJobAtom(notificationJobAtom+1)
    }}>me</button>
    </>
  )
}

export default App
