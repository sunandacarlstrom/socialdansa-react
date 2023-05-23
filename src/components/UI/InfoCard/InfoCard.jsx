import styles from "./InfoCard.module.css";

const InfoCard = ({ title, surtitle, children }) => {
    return (
        <section className={`${styles["info-content-column"]} ${styles["bg-content"]}`}>
            <h2 className={styles["sub-title"]}>{title}</h2>
            {surtitle ? <h2>{surtitle}</h2> : null}
            <ol className={styles["grid-list"]}>{children}</ol>
        </section>
    );
};

export default InfoCard;
