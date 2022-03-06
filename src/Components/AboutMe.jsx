import React from 'react'
import './AboutMe.css'
// import '/public/imgs/me.png'

function AboutMe() {
  return (
    <div className='about-container'>
      {/* <img src="/imgs/pageDivider.png" alt="" /> */}
      <p className="about-paragraph">
      &nbsp;&nbsp;&nbsp;&nbsp;It feels wrong saying "self-taught" when I learned from several online sources and I was blessed to have a few friends give me some direction.
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tenetur ad delectus cum nostrum fugit earum ipsa aperiam error corrupti fugiat adipisci, magni asperiores tempore vero odit dolorem iure itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo quasi minima est laudantium! Nisi, recusandae consectetur. Sunt, dolores pariatur laudantium debitis deleniti reiciendis molestias officiis culpa, dolorum reprehenderit esse.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;Please take a minute to look over my projects & Thank You for visiting!
      </p>
      <div className="me-div">
        <img src='http://localhost:3000/static/media/me.mia.8edeaa2cc00d61827b05.jpg' className='me' alt="" />
      </div>
    </div>
  )
}

export default AboutMe