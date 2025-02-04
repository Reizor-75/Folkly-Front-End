//npm module
import { useState } from "react"

//components
import RadioSelect from "../../components/RadioSelect/RadioSelect"

//css
import styles from "./Setup.module.css" 

const Setup = () => {
  const [formData, setFormData] = useState({
    culture: '',
    lang: '',
    popCultureTypes: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const { culture, lang, popCultureTypes } = formData

  return ( 
    <main className={styles.container}>
      <div>Profile set up</div>
      <form form autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          What culture would you learn from?
          <RadioSelect inputInfo={"none"} type={`culture`} handleChange={handleChange}/>
        </label>
        <label className={styles.label}>
          What language would you learn?
          <input
            type="text"
            value={lang}
            name="lang"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Which Pop Culture category do you enjoy the most?
          <input
            type="text"
            value={popCultureTypes}
            name="popCultureTypes"
            onChange={handleChange}
          />
        </label>
      </form>
    </main>
  );
}

export default Setup;