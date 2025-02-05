//npm module
import { useEffect, useState } from "react"

//components
import RadioSelect from "../../components/RadioSelect/RadioSelect"

//services

import * as cultureService from '../../services/cultureService'

//css
import styles from "./Setup.module.css" 

const Setup = () => {
  const [cultures, setcultures] = useState()

  useEffect(() => {
      const fetchProfiles = async () => {
        const culturesData = await cultureService.getAllCultures()
        setcultures(culturesData)
      }
      fetchProfiles()
    }, [])


  const [formData, setFormData] = useState({
    culture: '',
    lang: '',
    popCultureTypes: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  // const { culture, lang, popCultureTypes } = formData

  if(!cultures){
    return(
      <h1>loading...</h1>
    )
  }
  return ( 
    <main className={styles.container}>
      {/* <h1>Profile set up</h1> */}
      <form form autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          <div className={styles.questionTitle}>What culture would you learn from?</div>
          {cultures.map(culture => (        
              <RadioSelect key={culture.id} inputInfo={culture} type='culture' handleChange={handleChange}/>
            ))
          }
        </label>
        {/* <label className={styles.label}>
          What language would you learn?
          {cultures.map(culture => (        
              <RadioSelect key={culture.id} inputInfo={culture} type='lang' handleChange={handleChange}/>
            ))
          }
        </label>
        <label className={styles.label}>
          Which Pop Culture category do you enjoy the most?
          <RadioSelect inputInfo={"none"} type='culture' handleChange={handleChange}/>
        </label> */}
      </form>
    </main>
  );
}

export default Setup;