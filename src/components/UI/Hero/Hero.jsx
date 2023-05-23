import styles from "./Hero.module.css";
import HeroVideo from "./HeroVideo";
import HeroImage from "./HeroImage";
import Button from "../Button/Button";

const Hero = ({ title = "Title", src = null, alt = "", type = "video" }) => {
    var content;
    if (type === "video") {
        content = <HeroVideo className={styles["hero-transparent"]} src={src} alt={alt} />;
    } else if (type === "image") {
        content = <HeroImage src={src} alt={alt} />;
    } else {
        content = "ERORR";
    }

    return (
        <section className={styles.hero}>
            {content}
            <h1 className="hero-title">{title}</h1>
            <Button href="socialdans.html" background="primary">
                Hitta din nästa socialdans
            </Button>
        </section>
    );
};

export default Hero;
