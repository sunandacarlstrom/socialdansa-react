import styles from "./Hero.module.css"
import HeroVideo from "./HeroVideo";
import HeroImage from "./HeroImage";

const Hero = ({title = "Title", src = null, alt = "", type = "video"}) => {

    var content;
    if(type === "video"){
        content = <HeroVideo src={src} alt={alt}/>;
    }
    else if(type === "image"){
        content = <HeroImage src={src} alt={alt} />; 
    }
    else{
        content = "ERORR";
    }

    return (
<section className={styles.hero}>
        {content}
        <h1 className="hero-title">{title}</h1>
        <a className="btn btn-primary-color" href="socialdans.html">Hitta din nästa socialdans</a>
</section>
    )
}

export default Hero; 
