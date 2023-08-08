import Form from "./Form";
import styles from "./Form.module.css";
import SubmitButton from "../../UI/Button/SubmitButton"; 

const LoginForm = ({ onAddMessage }) => {
    return (
        <Form onAddMessage={onAddMessage}>
                <h1 className={styles.surtitle}>Logga in</h1>
                <h4>När du loggar in kan du som användare exempelvis spara sorteringsalternativ t.ex. favoritort.</h4>
                <label htmlFor="username">E-postadress</label>
                <input type="email" required id="username" name="username" placeholder="Skriv in användarnamn" />
                <label htmlFor="password">Lösenord</label>
                <input type="password" required id="password" name="password" placeholder="Skriv in lösenord" />
                <SubmitButton background="primary">Logga in!</SubmitButton>
        </Form>
    );
};

export default LoginForm;
