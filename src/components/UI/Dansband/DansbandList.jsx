import React from "react";
import Dansband from "./Dansband";

import styles from './DansbandList.module.css'

const DansbandList = ({dansband}) => {
    return (
        <div className={styles["grid-cards"]}>
            {dansband.map((band) => (
                <React.Fragment key={band.id}>
                    <Dansband dansband={band}/>
                </React.Fragment>
            ))}
        </div>
    );
};

export default DansbandList;
