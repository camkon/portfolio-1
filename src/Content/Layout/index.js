import { Outlet } from "react-router-dom"
import Header from '../Nav/header'
import SideNav from '../Nav/sidenav'
import './index.scss'

const Layout = () => {
  return(
    <div className="layout">
      <Header />
      <SideNav />
      <div className="outlet-container"><Outlet /></div>
    </div>
  )
}

export default Layout