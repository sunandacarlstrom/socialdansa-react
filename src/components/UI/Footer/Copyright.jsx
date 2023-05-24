import styles from "./Footer.module.css"

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.copywrite}>
            <p>Socialdansa &copy; {currentYear}</p>
        </div>
    );
};

export default Copyright;
