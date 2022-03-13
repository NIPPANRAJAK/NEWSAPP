import React, { useState } from "react";
import styles from "./Countries.module.css";
const Countries = ({ countryClick, countryList, countryChossen, forLoader }) => {
    const [active, setActive] = useState("")

    const changeColor = (countryCode) => {
        setActive({ active: countryCode })
        console.log("-------------->", countryCode)
    }

    const click = (item, countryCode) => {
        countryClick(item);
        forLoader(countryCode)
        changeColor(countryCode)
    }

    return (
        <div className={styles.container}>
            <p className={styles.header}>Select country</p>
            <div className={styles.lists}>
                {console.log("==========>", countryChossen)}
                {
                    countryList.map((countryCode) => < button className={countryCode == countryChossen ? "whiteButton" : "blackButton"} onClick={() => click(countryCode)}>{countryCode}</button>)

                }
            </div>
        </div>
    )
}

export default Countries;