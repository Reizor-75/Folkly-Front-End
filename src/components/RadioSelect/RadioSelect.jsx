//css 
import styles from "./RadioSelect.module.css"

const RadioSelect= ({inputInfo, type, handleChange}) => {

  function setType (){
    if(type === "culture") return inputInfo.name
    else if(type === "lang") return inputInfo.lang
    else if (type === "popCult") return inputInfo.popCultCat
  }

  return (
    <div className={styles.radioSelect}>
      <div className={styles.radioInput}>
        <input
          type="radio"
          value={`${setType()}`}
          name={type}
          onChange={handleChange}
        /> 
        <>{`${setType()}`}</>
      </div>
    </div>
  );
}

export default RadioSelect;