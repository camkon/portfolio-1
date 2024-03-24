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
    <div id="about-link" className={show ? "about-container show-up-animation" : "about-container"}>
    <span className="about-show-mark"></span>
    {show && 
      <div className="about-header gradient-overlay"><span>00.</span>About me</div>
    }
    {show && 
      <div className="about-info">
        <div className="about-left">
          About me? I got the most typical story of an engineering student in India. After 12th, I wrote the entrance exams. Didn't crack it. Droped a year. Repeated JEE and guess what!? Didn't crack it this time either. Joined a college. BOOM! Pandemic. Lucky me! - realised quickly that college won't teach anything beneficial in the real world.
          <br /><br />
          In second sem, I got into web-development. I knew c++ and python previously. I learned that during my drop year. Started learning React. Got a job as a Junior ReactJs Dev at service based firm. Got to learn many things "fast". Been learning and working on React for almost 2 years now.
          <br /><br />
          I always dreamed of studying architecture but during the drop year I realied my drive towards coding. Had no second thoughts after that. I'm a self taught developer. I've learned everything from the internet. I'm a quick learner and a team player. I love to figure out things along the way than wait to completly understand it. I used to love drawing but now have stopped and I dont know why. I do enjoy late night tea though. 
          <br /><br />
        </div>
        <div className="about-right"></div>
      </div>
    }
    </div>
  )
}

export default About