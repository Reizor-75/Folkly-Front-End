//css 
import styles from "./RadioSelect.module.css"


const RadioSelect= ({inputInfo, type, handleChange}) => {
  return (
    <div className={styles.radioSelect}>  
      <div className={styles.radioInput}>
        <input
          type="radio"
          value={`${inputInfo.name}`}
          name={type}
          onChange={handleChange}
        /> 
        <>{inputInfo.name}</>
      </div>
    </div>
  );
}

export default RadioSelect;