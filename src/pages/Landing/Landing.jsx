// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}> 
    {
      user ?
      <div className={styles.pageContent}>
        <div className={styles.pageTitle}>Welcome {user.name}</div>
        <div className={styles.chooseCult}>user.</div>
      </div>
      :
      <div className={styles.left}>
        <div className={styles.logo}>Folkly</div>
        <div className={styles.logon}>  
          <NavLink to="/auth/login"><button>Log In</button></NavLink>
          <NavLink to="/auth/signup"><button>Sign up</button></NavLink>
        </div>   
    </div>
    }
    </main>
  )
}

export default Landing
