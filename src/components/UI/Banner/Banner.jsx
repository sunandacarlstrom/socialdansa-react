import styles from "./Banner.module.css"; 

const Banner = ({title, text}) => {
    return (
        <section className={`${styles.banner} ${styles["bg-banner-color"]}`}>
            <h5>{title}</h5>
            <p>{text}</p>
        </section>
    )
}

export default Banner; 