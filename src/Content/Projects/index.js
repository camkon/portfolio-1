import { useState, useEffect } from 'react'
import './index.scss'

const Projects = () => {

  const [show, setShow] = useState(false)
  const projectObserver = new IntersectionObserver((e) => {
    e.forEach(i => { if(i.isIntersecting) setShow(true)})
  })
  useEffect(() => {
    projectObserver.observe(document.querySelector(`.project-show-mark`))
  }, [])

  return(
    <div className={show ? "project-container show-up-animation" : "project-container"}>
    <div className="project-show-mark"></div>
    {show &&
      <div className="project-header"><span>02.</span>Projects</div>
    }  
    {show &&
      <div className='project-info'>PROJECTS</div>
    }  
    </div>
  )
}

export default Projects