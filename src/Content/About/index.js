import { useState, useEffect } from 'react'
import './index.scss'

const About = () => {

  const [show, setShow] = useState(false)
  const aboutObserver = new IntersectionObserver((e) => {
    e.forEach(i => { if(i.isIntersecting) setShow(true)})
  })
  useEffect(() => {
    aboutObserver.observe(document.querySelector(`.about-show-mark`))
  }, [])

  return(
    <div className={show ? "about-container show-up-animation" : "about-container"}>
    <span className="about-show-mark"></span>
    {show && 
      <div className="about-header"><span>01.</span>About me</div>
    }
    {show && 
      <div className="about-info">
        <div className="about-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi numquam deleniti debitis ipsa, recusandae tempore quis itaque nesciunt ex ipsum dolor ut fuga culpa aliquam sed maiores quisquam ab.
          <br /><br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quos blanditiis repudiandae totam sapiente voluptate vitae molestias corrupti tempora sit quo inventore, ducimus quae amet harum non, adipisci nesciunt aliquid error itaque, animi veniam repellendus et aperiam? Vero, autem molestias!
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, explicabo enim quaerat doloremque fugiat odio?
          <br /><br />
          
        </div>
        <div className="about-right"></div>
      </div>
    }
    </div>
  )
}

export default About