import Card from "../Card/Card";
import styles from './Dansband.module.css'

const Dansband = ({dansband}) => {
    return (
        <Card className={`${styles["info-card"]} bg-primary bg-info`} key={dansband.id}>
            <img src={require(`../../../assets/${dansband.src}`)} alt={dansband.name} />
            <div>
                <h2 className={styles["sub-title"]}>{dansband.name}</h2>
                <p>{dansband.text}</p>
            </div>
        </Card>
    );
};

export default Dansband;
