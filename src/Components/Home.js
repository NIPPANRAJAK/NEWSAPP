import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/index";
import Categories from "./Categories/index";
import Countries from "./Countries/index";
import NewsList from "./NewsList/index";
import { getCode } from "country-list";
import styles from "./Home.module.css";

const categoryList = [{ name: 'Business', logo: 'far fa-building' }, { name: 'Technology', logo: 'fas fa-microchip' }, { name: 'Entertainment', logo: 'fas fa-film' }, { name: 'Sports', logo: 'far fa-futbol' }, { name: 'Health', logo: 'fas fa-first-aid' }, { name: 'Science', logo: 'fas fa-flask' }]
const countryList = [{ CountryName: 'Argentina', Code: 'AR' }, { CountryName: 'Australia', Code: 'AU' }, { CountryName: 'Austria', Code: 'AT' }, { CountryName: 'Belgium', Code: 'BE' }, { CountryName: 'Brazil', Code: "BR" }, { CountryName: 'Canada', Code: 'CA' }, { CountryName: 'China', Code: 'CH' }, { CountryName: 'Colombia', Code: 'CO' }, { CountryName: 'Cuba', Code: 'CU' }, { CountryName: 'Egypt', Code: 'EG' }, { CountryName: 'Germany', Code: 'DE' }, { CountryName: 'Greece', Code: 'GR' }, { CountryName: 'Hong Kong', Code: 'HK' }, { CountryName: 'Iceland', Code: 'IC' }, { CountryName: 'India', Code: 'IN' }, { CountryName: 'Ireland', Code: 'IR' }, { CountryName: 'Italy', Code: 'IT' }, { CountryName: 'Japan', Code: 'JA' }, { CountryName: 'Mexico', Code: 'ME' }, { CountryName: 'Netherlands', Code: 'NE' }, { CountryName: 'Peru', Code: 'PE' }, { CountryName: 'Portugal', Code: 'PO' }, { CountryName: 'Russia', Code: 'RU' }, { CountryName: 'Turkey', Code: 'TU' }, { CountryName: 'Spain', Code: 'SP' }, { CountryName: 'Ukraine', Code: 'UK' }]

const Home = () => {

    const [newsArray, updateArray] = useState([]);
    const [loader, setLoader] = useState(false);
    const [countryChossen, setCountryChossen] = useState("in");

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=86e2464e6dfe4afe89b811527a204863`).then((response) => {
            return response.json();
        }).then((json) => {
            updateArray(json.articles)
        }).catch(() => {
            console.log("Error in fetch")
        })

    }, [])

    const search = (query) => {
        if (query) {
            fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=86e2464e6dfe4afe89b811527a204863`).then((response) => {
                return response.json();
            }).then((json) => {
                updateArray(json.articles)
            }).catch(() => {
                console.log("Error in fetch")
            })
        }
        else
            alert('Empty search field');
    }

    const categories = (query) => {
        fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=86e2464e6dfe4afe89b811527a204863`).then((response) => {
            return response.json();
        }).then((json) => {
            updateArray(json.articles)
        }).catch(() => {
            console.log("Error in fetch")
        })
    }

    const forLoader = () => {
        setLoader(true);
    };

    const countries = async (query) => {
        let countryCode = getCode(query)
        await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&sortBy=popularity&apiKey=86e2464e6dfe4afe89b811527a204863`).then((response) => {
            return response.json();
        }).then((json) => {
            updateArray(json.articles)
        }).catch(() => {
            console.log("Error in fetch")
        })
        setLoader(false);
        console.log("--------------->")
        setCountryChossen(countryCode)
        // console.log(countryChossen)
    }

    console.log("loader", loader)

    return (
        <div>
            <Navbar search={search} />
            <div className={styles.mainContainer}>
                <Categories categoryList={categoryList} categoryClick={categories} />
                {loader ? <h3>loading...</h3> : <NewsList newsArray={newsArray} />}
                <Countries countryList={countryList} countryChossen={countryChossen} countryClick={countries} forLoader={forLoader} />
            </div>
        </div>
    )
}

export default Home;