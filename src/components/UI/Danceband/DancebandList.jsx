import { Fragment } from "react";
import Danceband from "./Danceband";

import styles from "./DancebandList.module.css";

const DancebandList = ({ dancebands }) => {
    return (
        <div className={styles["grid-cards"]}>
            {dancebands.map((danceband) => (
                <Fragment key={danceband.id}>
                    <Danceband danceband={danceband} />
                </Fragment>
            ))}
        </div>
    );
};

export default DancebandList;
