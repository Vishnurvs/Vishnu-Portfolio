import { Outlet } from 'react-router-dom'
import './App.css'
import Aside from './components/Aside'
import Navbar from './components/Navbar'
import { useEffect } from 'react'

function App() {
  // useEffect(() => {
  //   alert("Use Desktop Site in Mobile");
  // }, [])
  
  return (
    <>
    <Aside/>
      <div className="main-content">
        
        <Navbar/>
        <section style={{scrollBehavior: 'smooth'}}>
          <Outlet/>
        </section>
      </div>
    </>
  )
}

export default App
