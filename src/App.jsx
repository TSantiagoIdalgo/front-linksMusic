import { Route, Routes } from 'react-router-dom'
import Main from './components/landing/main/main'
import Footer from './components/landing/footer/footer'
import Login from './components/user/login/login'
import Register from './components/user/register/register'
import PlayerMain from './components/player/main/main'
import './App.css'

function App() {
const token = window.localStorage.getItem('USER_INFO')
return (
  <Routes>
    <Route path="/" element={[<Main key={0}/>, <Footer key={1}/>]} />
    { token === null ? <Route path="/login" element={<Login />} /> : null}
    <Route path="/register" element={<Register />} />
    <Route path="/musicplayer/:id" element={<PlayerMain />} />
  </Routes>
  )
}

export default App
