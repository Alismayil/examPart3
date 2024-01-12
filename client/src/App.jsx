
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PorfolioPage from './pages/PorfolioPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AddPage from './pages/AddPage';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {

  return (
   <>
   <Navbar/>
    <Routes>
        <Route path="/"  element={<HomePage/>} /> 
        <Route path="/about"  element={<AboutPage/>} /> 
        <Route path="/portfolio"  element={<PorfolioPage/>} /> 
        <Route path="/services"  element={<ServicesPage/>} /> 
        <Route path="/testimonials"  element={<HomePage/>} /> 
        <Route path="/blog"  element={<BlogPage/>} /> 
        <Route path="/contact"  element={<ContactPage/>} /> 
        <Route path="/add"  element={<AddPage/>} /> 
      </Routes>
   <Footer/>
   </>
  )
}

export default App
