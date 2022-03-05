import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Components/Pages/Home'
import Company from './Components/Pages/Company'
import Contact from './Components/Pages/Contact'
import NewProject from './Components/Pages/NewProject'
import Projects from './Components/Pages/Projects'
import Project from './Components/Pages/Project'

import Container from './Components/Layouts/Container'
import Navbar from './Components/Layouts/Navbar'
import Footer from './Components/Layouts/Footer'


function App() {
  return (
    <BrowserRouter> 
      <Navbar  />
        <Container customClass='min-height'>
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Projects" element={<Projects/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>    
            <Route path= "/Project/:id" element={<Project/>}/>    
          </Routes>
        </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
