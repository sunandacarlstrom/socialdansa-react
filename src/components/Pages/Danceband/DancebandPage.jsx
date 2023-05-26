import { useEffect, useState } from "react";
import axios from "axios";

import MainContent from "../../UI/MainContent/MainContent";
import DancebandList from "../../UI/Danceband/DancebandList";
import Contact from "../../UI/Contact/Contact";

const Danceband = () => {
    const [dancebands, setDancebands] = useState([]);
    const url = "http://localhost:5020/api/v1/danceband";

    useEffect(() => {
        const loadDancebands = async () => {
            const { data } = await axios.get(url);
            setDancebands(data);
        };

        loadDancebands();
    }, []);

    return(
        <MainContent>
            <DancebandList dancebands={dancebands}/>
            <Contact title="Vill du också synas på Socialdansa?" subTitle="Klicka på Samarbeta!" buttonStyle="btn-primary-color" />
        </MainContent>
    )
}

export default Danceband; 