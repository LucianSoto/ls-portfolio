import React, { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Email.css'

function Email() {
  
  useEffect(() => {
    handleScroll()
  }, [])

  const handleScroll = () => {
    setTimeout(()=> {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 300) 
  }

  const sendEmail = (e) => {
    e.preventDefault();
    // const name = e.target
    // console.log(e.target)

    emailjs.sendForm('service_zxmhmnp', 'template_8gqkvjh', e.target, 'U8dd6PfryBHkf_mb3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
        alert(`Your Email has been sent, Thank You!`)
  }

  return (
    <div className='form-cont'>
      <h3 className="email-title">Any Questions?</h3>
      <p>Feel free to contact me directly!</p>
      <form action="" onSubmit={sendEmail}>
        <div className="input-cont">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder='First & Last'
            name='from_name'
          />
        </div>
        <div className="input-cont">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder='example@gmail.com'
            name='from_email'
          />
        </div>
        <div className="input-cont message-cont">
          <label>Message</label>
          <textarea 
            type="text" 
            className="form-control" 
            placeholder='Message'
            name='message'
            // cols='30'
          ></textarea>
        </div>
        <div className="input-cont" id='btn-cont'>
          <input 
            
            type="submit" 
            className="btn" 
            value='Send'
          />
        </div>
      </form>
    </div>
  )
}

export default Email

