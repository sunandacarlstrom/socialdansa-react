import styles from "./GridView.module.css"

const GridView = ({title, children}) => {
    return (
    <section className={`${styles["info-content-column"]}`}>
        <h2 className={styles.surtitle}>{title}</h2>
        <div className={styles["grid-cards"]}>{children}</div>
    </section>
    );
};

export default GridView;