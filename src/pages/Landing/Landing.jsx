// npm modules
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// services 
import * as profileService from "../../services/profileService"

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  const [profile, setProfile] = useState()

  useEffect (()=>{
    const fetchProfile = async() =>{
      const data = await profileService.getProfile(user.profile)
      setProfile(data)
    } 
    if(user) fetchProfile()
  },[user])

  return (
    <main className={styles.container}> 
    {user && profile ?
      <div className={styles.pageContent}>
        <div className={styles.pageTitle}>Welcome {profile.name}</div>
        <div className={styles.profileCult}>
          {profile.culture ?
            <>
              <div className={styles.choosenCult}>
                <div className={styles.cultureTitle}>{profile.culture}</div>
              </div>
              <div className={styles.curPopLesson}>

              </div>
            </>
            : 
            <div className={styles.choosenCult}>
              <div className={styles.cultureTitle}>No Culutre Selected</div>
              <NavLink to="/Setup"><button className={styles.button}>Setup culture</button> </NavLink>
            </div>
            }
        </div>
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
