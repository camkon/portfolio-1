import { useState, useEffect } from 'react'
import './index.scss'
import Resume from '../../Assets/Images/Ansaf_Nisam_Frontend_Dev_Resume.pdf'

const Lander = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 700);
  },[])

  const dot = document.querySelector(`.dot`)

  const handleMouseEnter = () => {
    dot.style.height = '10rem'; dot.style.width = '10rem';
    dot.style.border = '1px solid #6200ff'; dot.style.background = 'transparent';
  }
  const handleMouseLeave = () => {
    dot.style.height = '10px'; dot.style.width = '10px';
    dot.style.border = 'none'; dot.style.background = '#6200ff';
  }

  return(
    <div className="lander-container">
      {show && 
        <div className="bio">
          <div className="bio-one">Hi, I'm</div>
          <div className="bio-two gradient-overlay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Ansaf Nisam. I'm a frontend developer</div>
          <div className="bio-three">
            I create awesome scalable web applications. I'd love to work on projects that push me to learn new things and help me grow as a developer. If you have something that we could collaborate on, feel free to connect with me, or if you are looking to hire...
          </div>
          <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="bio-four gradient-overlay" href={Resume} download='Ansaf_Nisam_Frontend_Dev_Resume.pdf'>Download my resume</a>
        </div>
      }
    </div>
  )
}

export default Lander