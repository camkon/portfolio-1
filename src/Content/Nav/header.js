import './header.scss'

const Header = () => {
  return(
    <div className="header-container">
      <div className="header-left">
        camkon()
      </div>
      <div className="header-right">
        <div className="menus">about()</div>
        <div className="menus">history()</div>
        <div className="menus">work()</div>
        <div className="menus">contact()</div>
      </div>
    </div>
  )
}

export default Header