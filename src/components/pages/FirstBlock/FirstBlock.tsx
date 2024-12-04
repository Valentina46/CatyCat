import { Header } from "./header/Header"
import { Infoblock } from "./infiblock/Infoblock"
import styles from "./FirstBlock.module.css"
import { useIsMobile } from "../../../hooks/useIsMobile/useIsMobile"
import BackgroundSlider from "./header/BackgroundSlider/BackgroundSlider"


export const FirstBlock = () => {
  const isMobile = useIsMobile()
  console.log(isMobile);
  
  return(
    <div className={styles.root}>
      <BackgroundSlider/>
      <Header/>
      <Infoblock/>
    </div>
    
  )

}