import { useState, useEffect } from 'react'
import './index.scss'

const Contact = () => {

  const [show, setShow] = useState(false)
  const contactObserver = new IntersectionObserver((e) => {
    e.forEach(i => { if(i.isIntersecting) setShow(true)})
  })
  useEffect(() => {
    contactObserver.observe(document.querySelector(`.contact-show-mark`))
  }, [])

  return(
    <div className={show ? "contact-container show-up-animation" : "contact-container"}>
      <div className="contact-show-mark"></div>
      {show &&
        <div className="contact-container-1 contact-box">
          <div className="contact-header"><span>03.</span>Get In Touch</div>
          <p>Even though I'm not very outgoing, I'd love to talk about career, growth and technologies. </p>
          <div className="contact-button">Say Hello!</div>
        </div>
      }
      <div className="contact-container-2 footer">
        made with code <span style={{transform: 'rotate(90deg)', margin: '0 0.5rem'}}>:)</span> what else
      </div>
    </div>
  )
}

export default Contact