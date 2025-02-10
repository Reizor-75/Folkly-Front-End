// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>Folkly</div>
      {user &&
        <div className={styles.menu}>
          <i className="fa-solid fa-bars"></i>
          <div className={styles.userDropDown}>
            <NavLink to="/profiles">Profiles</NavLink>
            <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
            <NavLink to="/auth/change-password">Change Password</NavLink>
          </div>
        </div>

      }
    </nav>
  )
}

export default NavBar
