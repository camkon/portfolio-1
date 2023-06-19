import './sidenav.scss'
import codeImg from '../../Assets/Images/github.svg'
import atImg from '../../Assets/Images/instagram.svg'
import briefcaseImg from '../../Assets/Images/linkedin.svg'
import hashtagImg from '../../Assets/Images/twitter.svg'

const SideNav = () => {
  return(
    <div className="sidenav-container">
      <a href='https://www.github.com/camkon' target='blank' className="links"><img src={codeImg} alt="github" /></a>
      <a href='#' className="links"><img src={atImg} alt="instagram" /></a>
      <a href='https://www.linkedin.com/in/ansaf-nisam' target='blank' className="links"><img src={briefcaseImg} alt="linkedin" /></a>
      <a href='https://www.twitter.com/ansaf_nisam' target='blank' className="links"><img src={hashtagImg} alt="twitter" /></a>
      {/* <a className="links"><img src={mail} alt="email" /></a> */}
    </div>
  )
}

export default SideNav