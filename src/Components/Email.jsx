import React from 'react'
import emailjs from '@emailjs/browser'
import './Email.css'

function Email() {

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
      <h3 className="email-title">Contact Me!</h3>
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
        <div className="input-cont">
          <label>Subject</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Reason for Contacting'
            name='subject'
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

