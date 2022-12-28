import react from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route, useLocation} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Header from './Component/Header'
import { Container } from 'react-bootstrap'
import {AnimatePresence} from "framer-motion"
function App() {
 const location = useLocation();
  return (
    <div className="App">
        <Header/>
          <Container>
         <AnimatePresence mode='wait'>

          <Routes location={location} key= {location.pathname}>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/about' element={<About/>}/>
            
            <Route path='/services' element={<Services/>}/>
            
            <Route path='/projects' element={<Projects/>}/>
            
            <Route path='/contact' element={<Contact/>}/>
            
          </Routes>
         </AnimatePresence>
          </Container>          
       
    </div>
  )
}

export default App
