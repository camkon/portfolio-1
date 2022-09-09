import { useState, useEffect } from 'react'
import './index.scss'

const History = () => {

  const [show, setShow] = useState(false)
  const historyObserver = new IntersectionObserver((e) => {
    e.forEach(i => { if(i.isIntersecting) setShow(true)})
  })
  useEffect(() => {
    historyObserver.observe(document.querySelector(`.history-show-mark`))
  }, [])

  return(
    <div className={show ? "history-container show-up-animation" : "history-container"}>
    <div className="history-show-mark"></div>
    {show &&
      <div className="history-header"><span>02.</span>History</div>
    }
    {show &&
      <div className="history-info">
        <div className="history-left">
          <div className='company-names selected-company'>Chzapps</div>
        </div>
        <div className="history-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi numquam deleniti debitis ipsa, recusandae tempore quis itaque nesciunt ex ipsum dolor ut fuga culpa aliquam sed maiores quisquam ab.
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

export default History