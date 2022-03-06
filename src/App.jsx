import NavBar from "./Components/NavBar";
import './App.css'
import Welcome from "./Components/Welcome";
import Portfolio from "./Components/Portfolio";
import LoaderComponent from "./Components/LoaderComponent";
import { useState } from 'react'
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom"
import Resume from "./Components/Resume";


function App() {
  const [loader, setLoader] = useState(true)

  const stopLoader = () => {
    setLoader(false)
  }
  const loaderTimer = () => {
    setInterval(() => stopLoader(), 4000 )
  }

  loaderTimer()

  return (
   
    <div className="App"> 
      {/* { loader? <LoaderComponent /> : null  } */}
      { !loader &&  <NavBar /> }
      
      <Routes>
        <Route 
          path='/' 
          element={ 
          !loader && <><Welcome /><AboutMe/></>} />
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/resume" element={ <Resume/>} />
      </Routes>
      { !loader && <Footer /> } 
      
    </div>
    
  )
}

export default App;
