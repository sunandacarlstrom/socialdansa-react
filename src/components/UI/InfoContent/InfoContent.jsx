import styles from "./InfoContent.module.css"

const InfoContent = ({children}) => {
    return <div className={styles["info-content"]}>{children}</div>;
}

export default InfoContent; 