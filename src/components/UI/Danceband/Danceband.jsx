import Card from "../Card/Card";
import styles from "./Danceband.module.css";

const Danceband = ({ danceband }) => {
    return (
        <Card className={`${styles["info-card"]} bg-primary bg-info`} key={danceband.id}>
            <img src={require(`../../../assets/${danceband.src}`)} alt={danceband.name} />
            <div>
                <h2 className={styles["sub-title"]}>{danceband.name}</h2>
                <p>{danceband.text}</p>
            </div>
        </Card>
    );
};

export default Danceband;
