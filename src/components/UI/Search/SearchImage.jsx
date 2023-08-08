import styles from "./Search.module.css";

const SearchImage = ({ src = null, alt = "" }) => {
    return (
        <div className={styles.hero}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default SearchImage;
