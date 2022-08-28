import './sidenav.scss'
import codeImg from '../../Assets/Images/github.svg'
import atImg from '../../Assets/Images/instagram.svg'
import briefcaseImg from '../../Assets/Images/linkedin.svg'
import hashtagImg from '../../Assets/Images/twitter.svg'

const SideNav = () => {
  return(
    <div className="sidenav-container">
      <div className="links"><img src={codeImg} alt="github" /></div>
      <div className="links"><img src={atImg} alt="instagram" /></div>
      <div className="links"><img src={briefcaseImg} alt="linkedin" /></div>
      <div className="links"><img src={hashtagImg} alt="twitter" /></div>
      {/* <div className="links"><img src={mail} alt="email" /></div> */}
    </div>
  )
}

export default SideNav