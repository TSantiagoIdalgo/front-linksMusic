import { Routes, Route } from 'react-router-dom'
import Landing from './views/landing/landing'
import { useLocalUser } from './util/hook/localStorage/localStorege'
import Footer from './views/landing/footer/footer'
import Navbar from './components/navbar/navbar'
import Login from './views/login/login'
import Verify from './views/verify/verify'
import './App.css'

function App() {
  const { userToken } = useLocalUser()
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={[
          <Landing key={1}/>,
          <Footer key={2}/>]} />
          {!userToken && <Route path='/login' element={<Login />} />}
          {!userToken && <Route path='/verify' element={<Verify />} />}
      </Routes>
    </div>
  )
}

export default App
