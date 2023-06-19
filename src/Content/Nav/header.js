import { useState } from 'react'
import './header.scss'

const Header = () => {

  const [phone, setPhone] = useState(window.innerWidth < 800 ? true : false)
  const [menu, setMenu] = useState(false)
  const [menuAnime, setMenuAnime] = useState(true)

  const handleCloseMenu = () => {
    setMenuAnime(false)
    setTimeout(() => {setMenu(false)}, 1500);
  }

  return(
    <div className="header-container">
      <div className="header-left">
        camkon()
      </div>
      {!phone ? 
        <div className="header-right">
          <a href='#about-link' className="menus">about()</a>
          <a href='#experience-link' className="menus">experience()</a>
          <a href='#project-link' className="menus">projects()</a>
          <a href='#contact-link' className="menus">contact()</a>
        </div> : 
        <div className="header-right-phone">
          <div className="phone-menu-head" onClick={() => {setMenu(true);setMenuAnime(true)}}>menu()</div>
          {menu && 
            <div className={menuAnime ? "phone-menu-options options-open" : "phone-menu-options options-close"}>
              <div id="phone-anime-box" className={menuAnime ? "phone-anime-box-open" : "phone-anime-box-close"}>
                <div className={menuAnime ? "phone-anime-menus phone-anime-box-open" : "phone-anime-menus phone-anime-box-close"}></div>
                <div className={menuAnime ? "phone-anime-menus phone-anime-box-open" : "phone-anime-menus phone-anime-box-close"}></div>
                <div className={menuAnime ? "phone-anime-menus phone-anime-box-open" : "phone-anime-menus phone-anime-box-close"}></div>
                <div className={menuAnime ? "phone-anime-menus phone-anime-box-open" : "phone-anime-menus phone-anime-box-close"}></div>
                <div className={menuAnime ? "phone-anime-menus phone-anime-box-open" : "phone-anime-menus phone-anime-box-close"}></div>
              </div>

              <div id="phone-menu-box" className={menuAnime ? "phone-menu-box-open" : "phone-menu-box-close"}>
                <div className="menus close-option" onClick={handleCloseMenu}>close()</div>
                <a onClick={handleCloseMenu} href='#about-link' className="menus">00.about()</a>
                <a onClick={handleCloseMenu} href='#experience-link' className="menus">01.experience()</a>
                <a onClick={handleCloseMenu} href='#project-link' className="menus">02.projects()</a>
                <a onClick={handleCloseMenu} href='#contact-link' className="menus">03.contact()</a>
              </div>
            </div>
          }
        </div>  
      }
    </div>
  )
}

export default Header