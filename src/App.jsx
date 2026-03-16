import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Subscribe from './Components/Subscribe'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default App
