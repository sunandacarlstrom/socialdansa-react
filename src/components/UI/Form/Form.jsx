import styles from "./Form.module.css";

const Form = ({ children, onAddMessage }) => {
    return (
        <div className={styles["form-container"]}>
            <form onSubmit={onAddMessage} className={`${styles["bg-form"]} ${styles["form-control"]}`}>
                {children}
            </form>
        </div>
    );
};

export default Form;
