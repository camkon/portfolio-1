import { useState, useEffect } from 'react'
import './index.scss'

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
          <div className="bio-one">Hi, my name is</div>
          <div className="bio-two">Ansaf Nisam. I make the web a bit better</div>
          <div className="bio-three">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse unde! Iure quasi temporibus nesciunt et sed explicabo consequuntur eius veniam, recusandae at! Eveniet minus perferendis odio repellendus saepe, nam a repudiandae sit labore? Quaerat aliquam saepe, dolore quod esse eveniet voluptas illo veritatis laudantium perspiciatis repudiandae vitae, possimus qui.
          </div>
          <div className="bio-four">Download my resume</div>
        </div>
      }
    </div>
  )
}

export default Lander