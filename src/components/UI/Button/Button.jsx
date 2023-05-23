import styles from "./Button.module.css"

const Button = ({href, children, background}) => {
    var buttonStyle;
    switch (background) {
        case "primary":
            buttonStyle = styles["btn-primary-color"];
            break;
        case "secondary":
            buttonStyle = styles["btn-secondary-color"];
            break;
        default:
            break;
    }

    return(
        <a href={href} className={`${styles.btn} ${buttonStyle}`}>
            {children}
        </a>
    );
}

export default Button; 