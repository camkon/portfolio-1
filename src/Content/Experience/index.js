import { useState, useEffect } from 'react'
import './index.scss'

const Experience = () => {

  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(1)
  const experienceObserver = new IntersectionObserver((e) => {
    e.forEach(i => { if(i.isIntersecting) setShow(true)})
  })
  useEffect(() => {
    experienceObserver.observe(document.querySelector(`.experience-show-mark`))
  }, [])

  return(
    <div id='experience-link' className={show ? "experience-container show-up-animation" : "experience-container"}>
    <div className="experience-show-mark"></div>
    {show &&
      <div className="experience-header gradient-overlay"><span>01.</span>Experience</div>
    }
    {show &&
      <div className="experience-info">
        <div className="experience-left">
          <div className={selected === 1 ? 'company-names selected-company' : 'company-names'} onClick={() => {setSelected(1)}}>Dabler</div>
          <div className={selected === 2 ? 'company-names selected-company' : 'company-names'} onClick={() => {setSelected(2)}}>Chzapps</div>
        </div>

        {/* DABLER */}
        <div className={selected === 1 ? 'experience-right-selected' : 'experience-right'}>
          <div className='experience-title'>FrontEnd Developer (part-time, remote) <br/> Nov 2022 - Present</div>
          <br />
          Joined this startup during its inception and assumed responsibility for full-stack frontend development, overseeing the entire lifecycle of product development. I played a key role in architecting and implementing robust and scalable frontend solutions for the company's products. Im primary responsibilities include:
          <br /><br />
          <ul>
            <li>Developed and maintained responsive web applications using ReactJs and Typescript and ReactJs libraries like Material UI, Ant Design and numerous utility packages.</li>
            <li>Implemented intuitive user interfaces and optimized user experiences through thoughtful design and efficient code.</li>
            <li>Conducted regular code reviews, identified and resolved bugs, and ensured code quality and maintainability.</li>
            <li>Worked closely with backend developers on a daily basis to integrate frontend components seamlessly.</li>
            <li>Implemented Scrum methodologies, leveraging Trello as the collaborative platform for effective coordination with backend and testing teams.</li>
            <li>Stayed updated with industry trends, emerging technologies, and best practices to enhance development processes.</li>
          </ul>
          <br /><br />
        </div>

        {/* CHZAPPS */}
        <div className={selected === 2 ? 'experience-right-selected' : 'experience-right'}>
          <div className='experience-title'>ReactJs Developer <br/> Jan 2022 - July 2022</div>
          <br />
          During my tenure here as my first company, I gained invaluable insights into the inner workings of real-world businesses. This experience provided me with valuable lessons on effectively engaging with clients, understanding and fulfilling their requirements, and nurturing strong professional relationships. Handled the front-end development area of multiple projects and maintain them from time to time
          <br /><br />
        </div>

      </div>
    }
    </div>
  )
}

export default Experience