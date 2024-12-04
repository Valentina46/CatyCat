import styles from "./Footer.module.css"

export const Footer = () => {

  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <h2 className={styles.title}>Подборка кошек</h2>
            <p className={styles.description}>Любите кошек? Мы поможем вам найти своего пушистого друга!</p>
            <div className={styles.socials}>
                <a href="#" className={styles.link}>Facebook</a>
                <a href="#" className={styles.link}>Instagram</a>
                <a href="#" className={styles.link}>Twitter</a>
            </div>
            <p className={styles.copy}>© 2023 Подборка кошек. Все права защищены.</p>
        </div>
    </footer>
);
};
