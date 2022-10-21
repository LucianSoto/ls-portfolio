import NavBar from "./Components/NavBar";
import './App.css'
import Welcome from "./Components/Welcome";
import Portfolio from "./Pages/Portfolio";
import LoaderComponent from "./Components/LoaderComponent";
import { useState } from 'react'
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer";
import Email from "./Pages/Email";
import { Routes, Route } from "react-router-dom"
import Blurb from "./Components/Blurb";
import { useEffect } from "react";

function App() {
  const [loader, setLoader] = useState(true)


useEffect(() => {
   loaderTimer()
 }, [loader])

  const stopLoader = () => {
    setLoader(false)
  }
  const loaderTimer = () => {
    setInterval(() => stopLoader(), 2200 )
  }


  return (
   
    <div className="App"> 
      { loader? <LoaderComponent /> : 
      <>
      <NavBar />
      <div className="stars" id="stars" ></div>
      <div className="twinkling" id='twinkling'></div>
      <Routes>
        <Route 
          path='/' 
          element={ !loader && <><Welcome /><Blurb/></> } 
        />
        <Route path="/email" element={<Email/>}
        />
        <Route 
          path="/portfolio" 
          element={<Portfolio/>}
        />
        <Route 
          path="/about"
          element={<AboutMe/>}
        />
      </Routes>
     <Footer /> 
     </>
     }
      
    </div>
    
  )
}

export default App;
