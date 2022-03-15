import React from 'react'
import emailjs from 'emailjs'

function Email() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'youtube_template', e.target, 'user_JABO21I8Gm6sxByJH17Nu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  }

  return (
    <div className='email-cont'>
      <h3 className="email-title">Contact Me!</h3>
      <form action="" onSubmit={sendEmail}>
        <div className="input-cont">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Name'
            name='name'
          />
        </div>
        <div className="input-cont">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder='Email Address'
            name='email'
          />
        </div>
        <div className="input-cont">
          <label>Subject</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Subject'
            name='subject'
          />
        </div>
        <div className="input-cont">
          <label>Message</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Message'
            name='message'
            cols='30'
          />
        </div>
        <div className="input-cont">
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

