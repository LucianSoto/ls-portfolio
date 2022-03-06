import React from 'react'
import './Loader.css'
// import Loader from 'react-loader'
// gonna use the loader or not?

function LoaderComponent() {
  return (
    <div className="loader-overlay">
      {/* <div className="loader"></div>
      <div className="loader-text">Loading...</div> */}
      <div className="loader-letters">
        <div className="letter" id='l'>L</div>
        <div className="letter" id="b">B</div>
      </div>
    </div>
  )
}

export default LoaderComponent