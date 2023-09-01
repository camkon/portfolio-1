import { useState, useEffect } from 'react'
import './index.scss'
import Resume from '../../Assets/Images/Ansaf_Nisam_CV_frontend_developer.pdf'

const Lander = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 700);
  },[])

  return(
    <div className="lander-container">
      {show && 
        <div className="bio">
          <div className="bio-one">Hi, I'm</div>
          <div className="bio-two gradient-overlay">Ansaf Nisam. I'm a frontend developer</div>
          <div className="bio-three">
            I create awesome scalable web applications. I'd love to work on projects that push me to learn new things and help me grow as a developer. If you have something that we could collaborate on, feel free to connect with me, or if you are looking to hire...
          </div>
          <a className="bio-four gradient-overlay" href={Resume} download='Ansaf_Nisam_CV_frontend_developer.pdf'>Download my resume</a>
        </div>
      }
    </div>
  )
}

export default Lander