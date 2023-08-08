import styles from "./Hero.module.css";
import HeroVideo from "./HeroVideo";
import Button from "../Button/Button";

const Hero = ({ title = "Title", src = null, alt = ""}) => {
    var content = <HeroVideo className={styles["hero-transparent"]} src={src} alt={alt} />;

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
