import Button from "../Button/Button";
import InfoContent from "../InfoContent/InfoContent";
import styles from "./InfoAccountCard.module.css"

const InfoAccountCard = ({ header, children, background }) => {
    var backgroundStyle;
    var buttonStyle;
    if (background === "primary") {
        backgroundStyle = "bg-primary";
        buttonStyle = "secondary";
    } else if (background === "secondary") {
        backgroundStyle = "bg-secondary";
        buttonStyle = "primary";
    }

    return (
        <section className={`${styles["info-content-row"]} ${backgroundStyle}`}>
            <div className={styles["container-image"]}>
                <img src="https://source.unsplash.com/random/280x280?ocean,night" alt="random image" />
            </div>
            <InfoContent>
                <h3 className="sub-title">{header}</h3>
            </InfoContent>
            <InfoContent>
                <p>{children}</p>
                <div>
                    <Button href="logga-in.html" background={buttonStyle}>
                        Logga in
                    </Button>
                </div>
            </InfoContent>
        </section>
    );
};

export default InfoAccountCard;
