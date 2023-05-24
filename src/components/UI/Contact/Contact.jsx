import Button from "../Button/Button";
import styles from "./Contact.module.css";

const Contact = ({ title, subTitle }) => {
    return (
        <section className={`${styles["info-content-row"]} ${styles["bg-dark"]}`}>
            <div>
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
            </div>
            <div className={styles["info-contact"]}>
                <Button href="/contact" background="primary">
                    Samarbeta!
                </Button>
                <Button href="/contact" background="secondary">
                    Kontakta oss
                </Button>
            </div>
        </section>
    );
};

export default Contact;
