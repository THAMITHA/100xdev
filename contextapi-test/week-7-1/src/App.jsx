import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  return (
  <div>
    <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  </div>  
  )
}

function AppBar(){
  const navigate = useNavigate()
  return <div>
    <div style={{background: "black", color: "white"}}>
      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>
      <button onClick={()=>{
        navigate("/")
      }
      }>Landing</button>
    </div>
  </div>  
}

export default App
