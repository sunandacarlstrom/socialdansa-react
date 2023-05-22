import styles from "./Banner.module.css"; 

const banner = "--- TÄVLING ---"; 
const bannerText = "Nu lottar vi ut två gratisbiljetter till nästa socialdans på Huskvarna Folkets Park!";

const Banner = () => {
    return (
        <section className= {`${styles.banner} ${styles["bg-banner-color"]}`}>
            <h5 className="banner">{banner}</h5>
            <p className="banner-text">{bannerText}</p>
        </section>
        
    )
}

export default Banner; 