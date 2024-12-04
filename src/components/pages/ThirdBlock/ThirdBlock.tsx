import styles from "./ThirdBlock.module.css"
import cat from "./../../assets/animation/Cat.json"
import { Player } from "@lottiefiles/react-lottie-player";

 
export const ThirdBlock = () => {
  return(
    <div className={styles.root} id='3-й блок'>
      <div className={styles.block}>
        <p className={styles.title}>Почему доверяют именно нам?</p>
        <div className={styles.textCont}>
          <p className={styles.text}> Более 63% уже нашли своих питомцев!Наш сервис помог соединить сотни семей и их идеальных питомцев.</p>
          <p className={styles.text}>У нас надёжные заводчики, предоставляем подробную информацию о котятах, поддержка 24 на 7, простой и быстрый процесс подбора.</p>
          <p className={styles.text}>Ваш котёнок ждёт вас уже сегодня!</p>
        </div>
      </div>
      <div className={styles.playerContainer}>
      <Player
        className={styles.player}
        autoplay
        loop 
        src={cat}
      />
    </div>
    </div>
  )
}