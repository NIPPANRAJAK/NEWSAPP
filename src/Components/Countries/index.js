import React, { useState, useCallback } from "react";
import styles from "./Countries.module.css";
const Countries = ({ countryList, countryChossen, countryClick, forLoader }) => {
    const [active, setActive] = useState()

    const changeColor = useCallback(() => {
        setActive(countryChossen)
    }, [countryChossen])

    const click = (item) => {
        countryClick(item);
        typeof (forLoader) == 'function' && forLoader()
        changeColor()
    }

    return (
        <div className={styles.container}>
            <p className={styles.header}>Select country</p>
            <div className={styles.lists}>
                {/* {console.log("==========>", countryChossen)} */}
                {
                    countryList.map((country) => {
                        console.log(countryChossen == country.Code ? styles.blackButton : styles.whiteButton)
                        return < button className={countryChossen == country.Code ? styles.blackButton : styles.whiteButton} onClick={() => click(country.CountryName)}>{country.CountryName}</button>
                    })

                }
            </div>
        </div>
    )
}

export default Countries;