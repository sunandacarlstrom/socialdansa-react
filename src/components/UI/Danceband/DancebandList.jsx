import React from "react";
import Danceband from "./Danceband";

import styles from "./DancebandList.module.css";

const DancebandList = ({ danceband }) => {
    return (
        <div className={styles["grid-cards"]}>
            {danceband.map((band) => (
                <React.Fragment key={band.id}>
                    <Danceband danceband={band} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default DancebandList;
