import '../src/css/tailwind.css'
import '../src/css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Elements/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './Components/Elements/Footer';
import Projects from './pages/Projects';

function App() {
  

  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects'element={<Projects />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </AnimatePresence>
  )
}

export default App
