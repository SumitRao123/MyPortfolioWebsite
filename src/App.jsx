import react from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Header from './Component/Header'
function App() {
 
  return (
    <div className="App">
        <Header/>
       
          <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/about' element={<About/>}/>
            
            <Route path='/services' element={<Services/>}/>
            
            <Route path='/projects' element={<Projects/>}/>
            
            <Route path='/contact' element={<Contact/>}/>
            
          </Routes>
       
    </div>
  )
}

export default App
