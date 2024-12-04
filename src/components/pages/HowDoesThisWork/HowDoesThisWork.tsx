import styles from "./HowDoesThisWork.module.css"
import chek from "./../../assets/howDoesThisWork/chek.png"
import hello from "./../../assets/howDoesThisWork/hello.png"
import love from "./../../assets/howDoesThisWork/love.png"
import letsgo from "./../../assets/howDoesThisWork/letsgo.png"

const sekondBlock = [
  {
    image:<img src={chek}/>,
    title:"Заполните анкету ",
    text:"Отметьте породу, цвет, пол и прочие преференции"
  },
  {
    image:<img src={hello}/>,
    title:"Получите рекомендации ",
    text:"От проверенных заводчиков или нашей команды"
  },
  {
    image:<img src={love}/>,
    title:"Выберите котенка",
    text:"И получите подробности о здоровье, документах и условиях покупки"
  },
  {
    image:<img src={letsgo}/>,
    title:"Оформите сделку ",
    text:"И заберите вашего нового друга домой!"
  }
]
  export const HowDoesThisWork = () => {
  return(
    <div className={styles.root} id="Как это работает">
      <p className={styles.mainTitle}>Как это работает</p>
      <div className={styles.blocks}>
        {sekondBlock.map((sekondBlock) => (
         <div className={styles.block}>
           <p className={styles.image}>{sekondBlock.image}</p>
           <div>
            <p className={styles.title} >{sekondBlock.title}</p>
            <p className={styles.text}>{sekondBlock.text}</p>
           </div>
         </div>
        ))}
     </div>
    </div>
  )

}