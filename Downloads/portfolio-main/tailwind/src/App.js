import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./pages/Form";

import {HashRouter} from 'react-router-dom'
import Experience from "./components/Experience";
import Projects from "./components/Projects";


function App() {
  return (
    <HashRouter>
      <div className="w-full">
      <Navbar />
      <Hero /> 
      <About/>
      <Experience />
      <Projects />
      <Contact/>
          
        
    
    
    
    
     
    </div>
    </HashRouter>
    
  );
}

export default App;
