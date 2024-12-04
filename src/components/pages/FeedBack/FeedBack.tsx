import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination, Navigation } from 'swiper/modules';
import kotoava from "./../../assets/feedback/kotoava.png"
import kotoava2 from "./../../assets/feedback/kotoava2.png"
import kotoava3 from "./../../assets/feedback/kotoava3.png"

import styles from "./FeedBack.module.css"

const people  = [
  {
    id:1,
    image: kotoava,
    name: "Константинов Михаил Павлович", 
    sity: "Санкт-Петербург",
    text:"Я долго мечтал о британском котенке. Этот сервис сделал поиск таким простым! Сейчас у нас дома любимая Келли."
  },

  {
    id:2,
    image: kotoava2,
    name: "Иван Иванов",
    sity: "Краснодар",
    text:"Мы нашли бенгальского котёнка через сервис. Всё прошло гладко: заводчик предоставил все документы, а котёнок оказался дружелюбным и активным! "
  },
  {
    id:3,
    image:kotoava3,
    name: "Анна Корнилова",
    sity: "Самара",
    text:"Купили мейн-куна через сервис. Заводчик был очень вежливым, а котёнок оказался настоящим гигантом с добрым сердцем. Рекомендую"
  },
  {
    id:3,
    image:kotoava,
    name: "Сергей Сергеев",
    sity: "Таганрог",
    text:"Сначала сомневалась, но всё прошло отлично. Котёнок здоров, активен и уже стал частью нашей семьи! "
  },
]

export const FeedBack = () => {

  
  return (
    <div className={styles.root}>
     <p className={styles.title}>Отзывы</p>
     <Swiper
        loop={true}
        effect={'flip'}
        grabCursor={true}
        modules={[Autoplay,Pagination]}
        pagination={true}
        className={styles.swiper}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
      
        375: {
          slidesPerView: 2,
          spaceBetween: 20,     
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
       }}
      >
     {people.map((person) => (
       <SwiperSlide>
         <div className={styles.card}>
            <div className={styles.ins}>
             <img className={styles.image} src={person.image}/>
             <div>
               <p className={styles.name}>{person.name}</p>
               <p className={styles.sity}>{person.sity}</p>
            </div>
            </div>
              <p className={styles.text}>{person.text}</p>
          </div>
       </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};