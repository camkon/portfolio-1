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
          <div className="contact-header"><span>04.</span>Get In Touch</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptates labore dolor odio sit, rerum mollitia deserunt nam impedit aperiam quod ut officia eaque voluptatibus molestiae, expedita, vel incidunt aut!</p>
          <div className="contact-button">Say Hello!</div>
        </div>
      }
      <div className="contact-container-2 footer">
        made with lv
      </div>
    </div>
  )
}

export default Contact