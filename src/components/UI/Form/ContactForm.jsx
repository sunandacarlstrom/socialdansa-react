import Form from "./Form";
import styles from "./Form.module.css";
import SubmitButton from "../Button/SubmitButton";

const ContactForm = ({ onAddMessage }) => {
    return (
        <Form onAddMessage={onAddMessage}>
                <h1 className={styles.surtitle}>Kontakta oss</h1>
                <h4>Skicka gärna ett meddelande till oss ifall du har frågor eller vill samarbeta med oss!</h4>

                <input type="text" name="firstName" placeholder="Ange förnamn" />
                <input type="text" name="lastName" placeholder="Ange efternamn" />
                <input type="text" name="message" placeholder="Meddelande" />
                <SubmitButton background="secondary">Skicka meddelandet!</SubmitButton>
        </Form>
    );
};

export default ContactForm;
