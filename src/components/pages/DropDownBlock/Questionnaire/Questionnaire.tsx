import { useState } from "react";
import styles from "./Questionnaire.module.css"
import {ReactComponent as Opens} from "./../../../assets/questionsAnswers/Opens.svg"
import  {ReactComponent as Closedd} from "./../../../assets/questionsAnswers/Closedd.svg"

interface IquestionsAnswers {
  qustion:string,
  answer:string
}
export const Questionnaire = ({qustion, answer}:IquestionsAnswers)=> {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className={styles.root}>
      {isOpen? (
        <div className={styles.block} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.closed}>
            <p className={styles.question}>{qustion}</p>
            <div className={styles.closed}>
             <Closedd className={styles.img} />
            </div>
            </div>
            <p className={styles.answer}>{answer}</p>
        </div>
      ):
      (
        <div className={styles.qustionImg} onClick={() => setIsOpen(!isOpen)}>
          <p className={styles.question}>{qustion}</p>
          <div className={styles.open}>
           <Opens className={styles.img}/>
          </div>
        </div>
      )}
    </div>
  )
}

