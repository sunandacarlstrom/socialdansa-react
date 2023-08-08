import FormButton from "../Button/FormButton";
import SubmitButton from "../Button/SubmitButton";
import styles from "./Search.module.css";

const Search = () => {
    return (
        <>
            <div className={`${styles["search-container"]} bg-primary`}>
                <h1>Hitta din nästa socialdans</h1>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h3>Var?</h3>
                        <input type="text" placeholder="Ort" />
                        <FormButton background="secondary">
                            Närmast!
                        </FormButton>
                    </div>
                    <div className={styles.column}>
                        <h3>När?</h3>
                        <input type="date" name="" id="date" />                        
                        <FormButton background="secondary">
                            Ikväll!
                        </FormButton>
                    </div>
                    <div className={styles.column}>
                        <SubmitButton background="primary">Sök</SubmitButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
