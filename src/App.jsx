import { Route, Routes } from 'react-router-dom'
import Main from './components/landing/main/main'
import Footer from './components/landing/footer/footer'
import Login from './components/user/login/login'
import './App.css'

function App() {
return (
  <Routes>
    <Route path="/" element={[<Main key={0}/>, <Footer key={1}/>]} />
    <Route path="/login" element={<Login />} />
  </Routes>
  )
}

export default App
