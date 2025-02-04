//npm module
import { useState } from "react"

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
      <form action="">
        <label className={styles.label}>
          What culture would you learn from?
          <input
            type="text"
            value={culture}
            name="culture"
            onChange={handleChange}
          />
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
            name="popCult"
            onChange={handleChange}
          />
        </label>
      </form>
    </main>
  );
}

export default Setup;