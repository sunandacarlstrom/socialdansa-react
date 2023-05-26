import SubmitButton from "../Button/SubmitButton";
import styles from "./Form.module.css";

const Form = ({ onAddMessage }) => {
    return (
        <div className={styles["form-container"]}>
            <form onSubmit={onAddMessage} className={`${styles["bg-form"]} ${styles["form-control"]}`}>
                <h1 className={styles.surtitle}>Kontakta oss</h1>
                <h4>Skicka gärna ett meddelande till oss ifall du har frågor eller vill samarbeta med oss!</h4>

                <input type="text" name="firstName" placeholder="Ange förnamn" />
                <input type="text" name="lastName" placeholder="Ange efternamn" />
                <input type="text" name="message" placeholder="Meddelande" />
                <SubmitButton background="secondary">Skicka meddelandet!</SubmitButton>
            </form>
        </div>
    );
};

export default Form;
