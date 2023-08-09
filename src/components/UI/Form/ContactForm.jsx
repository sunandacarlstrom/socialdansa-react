import Form from "./Form";
import styles from "./ContactForm.module.css";
import SubmitButton from "../Button/SubmitButton";

const ContactForm = ({ onAddMessage }) => {
    return (
        <Form onAddMessage={onAddMessage}>
                <h1 className={styles.surtitle}>Kontakta oss</h1>
                <h4>Skicka gärna ett meddelande till oss ifall du har frågor eller vill samarbeta med oss!</h4>

                <input className={styles.text} type="text" name="firstName" placeholder="Ange förnamn" />
                <input className={styles.text} type="text" name="lastName" placeholder="Ange efternamn" />
                {/* <input className={`${styles.text} ${styles.message}`} type="text" name="message" placeholder="Meddelande" /> */}
                <textarea className={`${styles.text} ${styles.message}`} rows="6" placeholder="Skriv ditt meddelande här"></textarea>
                <SubmitButton background="secondary">Skicka meddelandet!</SubmitButton>
        </Form>
    );
};

export default ContactForm;
