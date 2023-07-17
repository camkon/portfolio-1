import { Outlet } from "react-router-dom"
import Header from '../Nav/header'
import SideNav from '../Nav/sidenav'
import './index.scss'
import DotCursor from "../../Components/Cursor/cursor"

const Layout = () => {
  return(
    <div className="layout">
      <DotCursor />
      <Header />
      <SideNav />
      <div className="outlet-container"><Outlet /></div>
    </div>
  )
}

export default Layout