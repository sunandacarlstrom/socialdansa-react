import DansbandList from "../../UI/Dansband/DansbandList";
import MainContent from "../../UI/MainContent/MainContent";
import styles from "./DansbandPage.module.css";

const Dansband = () => {

    //Hämtar datat från json med dansband
    const dansband = [
        {
            "id": 1,
            "name": "Sannex",
            "text": "Sannex är ett dansband från Ystad och bildades först som ett skolprojekt år 1977. En låt som alltid spelas ute på dansbanerna idag är 'Det flammar till'.",
            "src": "images/dansband/Sannex.jpg"
        },
        {
            "id": 2,
            "name": "Perikles",
            "text": "Perikles är ett dansband som bildades år 1974 i Ystad. Minns du melodin av 'Var ska vi sova inatt?'",
            "src": "images/dansband/Sannex.jpg"
        },
        {
            "id": 3,
            "name": "Arvingarna",
            "text": "Arvingarna är ett dansband från Partille i Göteborg som bjuder på låtar av mestadels pop/schlager. Deras mest kända låt är Eloise som tog hem vinsten i Melodifestivalen 1993.",
            "src": "images/dansband/Sannex.jpg"
        },
        {
            "id": 4,
            "name": "Arvingarna",
            "text": "Arvingarna är ett dansband från Partille i Göteborg som bjuder på låtar av mestadels pop/schlager. Deras mest kända låt är Eloise som tog hem vinsten i Melodifestivalen 1993.",
            "src": "images/dansband/Sannex.jpg"
        },
        {
            "id": 5,
            "name": "Arvingarna",
            "text": "Arvingarna är ett dansband från Partille i Göteborg som bjuder på låtar av mestadels pop/schlager. Deras mest kända låt är Eloise som tog hem vinsten i Melodifestivalen 1993.",
            "src": "images/dansband/Sannex.jpg"
        },
        {
            "id": 6,
            "name": "Arvingarna",
            "text": "Arvingarna är ett dansband från Partille i Göteborg som bjuder på låtar av mestadels pop/schlager. Deras mest kända låt är Eloise som tog hem vinsten i Melodifestivalen 1993.",
            "src": "images/dansband/Sannex.jpg"
        },
    ];

    return(
        <MainContent>
            <DansbandList dansband={dansband}/>
        </MainContent>
    )
}

export default Dansband; 