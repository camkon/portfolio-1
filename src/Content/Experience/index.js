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
    <div className={show ? "experience-container show-up-animation" : "experience-container"}>
    <div className="experience-show-mark"></div>
    {show &&
      <div className="experience-header"><span>01.</span>Experience</div>
    }
    {show &&
      <div className="experience-info">
        <div className="experience-left">
          <div className={selected === 1 ? 'company-names selected-company' : 'company-names'} onClick={() => {setSelected(1)}}>Dabler</div>
          <div className={selected === 2 ? 'company-names selected-company' : 'company-names'} onClick={() => {setSelected(2)}}>Chzapps</div>
        </div>

        {/* DABLER */}
        <div className={selected === 1 ? 'experience-right-selected' : 'experience-right'}>
          DABLER Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi numquam deleniti debitis ipsa, recusandae tempore quis itaque nesciunt ex ipsum dolor ut fuga culpa aliquam sed maiores quisquam ab.
          <br /><br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quos blanditiis repudiandae totam sapiente voluptate vitae molestias corrupti tempora sit quo inventore, ducimus quae amet harum non, adipisci nesciunt aliquid error itaque, animi veniam repellendus et aperiam? Vero, autem molestias!
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, explicabo enim quaerat doloremque fugiat odio?
          <br /><br />
        </div>

        {/* CHZAPPS */}
        <div className={selected === 2 ? 'experience-right-selected' : 'experience-right'}>
          CHZAPPS Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi numquam deleniti debitis ipsa, recusandae tempore quis itaque nesciunt ex ipsum dolor ut fuga culpa aliquam sed maiores quisquam ab.
          <br /><br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quos blanditiis repudiandae totam sapiente voluptate vitae molestias corrupti tempora sit quo inventore, ducimus quae amet harum non, adipisci nesciunt aliquid error itaque, animi veniam repellendus et aperiam? Vero, autem molestias!
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, explicabo enim quaerat doloremque fugiat odio?
          <br /><br />
        </div>

      </div>
    }
    </div>
  )
}

export default Experience