import Form from "./Form";
import styles from "./AccountForm.module.css";
import SubmitButton from "../Button/SubmitButton";

const LoginForm = ({ onAddMessage }) => {
    return (
        <Form onAddMessage={onAddMessage}>
            <div className={styles["flex-form"]}>
                <h1 className={styles.surtitle}>Logga in</h1>
                <p className={styles.description}>När du loggar in kan du som användare exempelvis spara sorteringsalternativ t.ex. favoritort.</p>
            </div>
            <div className={styles["flex-form"]}>
                <label htmlFor="username">E-postadress:</label>
                <input type="email" required id="username" name="username" placeholder="Skriv in användarnamn" />
            </div>
            <div className={styles["flex-form"]}>
                <label htmlFor="password">Lösenord:</label>
                <input type="password" required id="password" name="password" placeholder="Skriv in lösenord" />
            </div>
            <div className={styles["flex-form"]}>
                <SubmitButton background="primary">Logga in</SubmitButton>
            </div>
        </Form>
    );
};

export default LoginForm;
