import { useState, useEffect } from 'react'
import './index.scss'
import { handleMouseEnter, handleMouseLeave } from '../../Hooks/useCursor'

const Contact = () => {

  const [show, setShow] = useState(false)
  const contactObserver = new IntersectionObserver((e) => {
    e.forEach(i => { if(i.isIntersecting) setShow(true)})
  })
  useEffect(() => {
    contactObserver.observe(document.querySelector(`.contact-show-mark`))
  }, [])

  return(
    <div id='contact-link' className={show ? "contact-container show-up-animation" : "contact-container"}>
      <div className="contact-show-mark"></div>
      {show &&
        <div className="contact-container-1 contact-box">
          <div className="contact-header gradient-overlay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>03.</span>Get In Touch</div>
          <p>Even though I'm not very outgoing, I'd love to talk about career, businesses and silence. Follow me on github and you'll have my complete attention. Or..</p>
          <div className="contact-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => document.querySelector(`.contact-button`).innerHTML = "This button does nothing 🐸. Ping me on <a href='https://www.linkedin.com/in/ansaf-nisam'>linkedin</a>"}>Say Hello!</div>
        </div>
      }
      <div className="contact-container-2 footer">
        made with code <span style={{transform: 'rotate(90deg)', margin: '0 0.5rem'}}>:)</span> what else
      </div>
    </div>
  )
}

export default Contact