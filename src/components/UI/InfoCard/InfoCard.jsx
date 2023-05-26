import styles from "./InfoCard.module.css";

const InfoCard = ({ title, surtitle, children }) => {
    return (
        <section className={`${styles["info-content-column"]} ${styles["bg-content"]}`}>
            <h1>{title}</h1>
            {surtitle ? <h2>{surtitle}</h2> : null}
            <ol className={styles["grid-list"]}>{children}</ol>
        </section>
    );
};

export default InfoCard;
