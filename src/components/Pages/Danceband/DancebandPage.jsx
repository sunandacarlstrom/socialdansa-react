import DancebandList from "../../UI/Danceband/DancebandList";
import MainContent from "../../UI/MainContent/MainContent";

const Danceband = () => {

    //Hämtar datat från json med dansband
    const danceband = [
        {
            "id": 1,
            "name": "Perikles",
            "text": "Perikles är ett dansband som bildades år 1974 i Ystad. Minns du melodin av 'Var ska vi sova inatt?'",
            "src": "images/danceband/Perikles.jpeg"
        },
        {
            "id": 2,
            "name": "Perikles",
            "text": "Perikles är ett dansband som bildades år 1974 i Ystad. Minns du melodin av 'Var ska vi sova inatt?'",
            "src": "images/danceband/Perikles.jpeg"
        },
        {
            "id": 3,
            "name": "Perikles",
            "text": "Perikles är ett dansband som bildades år 1974 i Ystad. Minns du melodin av 'Var ska vi sova inatt?'",
            "src": "images/danceband/Perikles.jpeg"
        },
        {
            "id": 4,
            "name": "Arvingarna",
            "text": "Arvingarna är ett dansband från Partille i Göteborg som bjuder på låtar av mestadels pop/schlager. Deras mest kända låt är Eloise som tog hem vinsten i Melodifestivalen 1993.",
            "src": "images/danceband/Arvingarna.jpeg"
        },
        {
            "id": 5,
            "name": "Arvingarna",
            "text": "Arvingarna är ett dansband från Partille i Göteborg som bjuder på låtar av mestadels pop/schlager. Deras mest kända låt är Eloise som tog hem vinsten i Melodifestivalen 1993.",
            "src": "images/danceband/Arvingarna.jpeg"
        },
        {
            "id": 6,
            "name": "Arvingarna",
            "text": "Arvingarna är ett dansband från Partille i Göteborg som bjuder på låtar av mestadels pop/schlager. Deras mest kända låt är Eloise som tog hem vinsten i Melodifestivalen 1993.",
            "src": "images/danceband/Arvingarna.jpeg"
        },
    ];

    return(
        <MainContent>
            <DancebandList danceband={danceband}/>
        </MainContent>
    )
}

export default Danceband; 