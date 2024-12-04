import styles from "./Infoblock.module.css"


export const Infoblock = () => {
  return(
    <div className={styles.root}>
      <div>
        <p className={styles.p1}>Говорят, никогда не поздно завести кота</p>
        <p className={styles.p2}>Задумались о пушистом друге? </p>
      </div>
      <div>
        <button className={styles.btn} onClick={()=>document.location.href = '#Заполните форму'}>
           Проще простого!
        </button>
      </div>
    </div>
  )

}