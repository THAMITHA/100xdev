import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
const Dashboard = lazy(()=>import('./components/Dashboard'))
const Landing = lazy(()=>import('./components/Landing'))

function App() {
  return (
  <div>
    <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"...loading"}><Dashboard/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={"...loading"}><Landing/></Suspense>}/>
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
