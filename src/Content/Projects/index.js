import { useState, useEffect } from 'react'
import './index.scss'
import { handleMouseEnter, handleMouseLeave } from '../../Hooks/useCursor'

const Projects = () => {

  const [phone, setPhone] = useState(window.innerWidth < 800 ? true : false)
  const [show, setShow] = useState(false)
  const projectObserver = new IntersectionObserver((e) => {
    e.forEach(i => { if(i.isIntersecting) setShow(true)})
  })
  useEffect(() => {
    projectObserver.observe(document.querySelector(`.project-show-mark`))
  }, [])

  return(
    <div id='project-link' className={show ? "project-container show-up-animation" : "project-container"}>
    <div className="project-show-mark"></div>
    {show &&
      <div className="project-header gradient-overlay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>02.</span>Projects</div>
    }  
    {show &&
      <div className="project-info">
        <div className="project-skelton-cards-container">
          <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
          <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
          <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
          <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
          <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
          <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
          {!phone && [
            <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>,
            <div className="project-skelton-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
          ]}
        </div>
      </div>
    }  
    </div>
  )
}

export default Projects