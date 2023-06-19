import { useState } from 'react'
import './header.scss'

const Header = () => {

  const [phone, setPhone] = useState(window.innerWidth < 800 ? true : false)
  const [menu, setMenu] = useState(false)
  const [menuAnime, setMenuAnime] = useState(true)

  return(
    <div className="header-container">
      <div className="header-left">
        camkon()
      </div>
      {!phone ? 
        <div className="header-right">
          <div className="menus">about()</div>
          <div className="menus">experience()</div>
          <div className="menus">projects()</div>
          <div className="menus">contact()</div>
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
                <div className="menus close-option" onClick={() => {
                  setMenuAnime(false)
                  setTimeout(() => {setMenu(false)}, 1500);
                }}>close()</div>
                <div className="menus">00.about()</div>
                <div className="menus">01.experience()</div>
                <div className="menus">02.projects()</div>
                <div className="menus">03.contact()</div>
              </div>
            </div>
          }
        </div>  
      }
    </div>
  )
}

export default Header