import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/index";
import Categories from "./Categories/index";
import Countries from "./Countries/index";
import NewsList from "./NewsList/index";
import { getCode } from "country-list";
import styles from "./Home.module.css";

const categoryList = [{ name: 'Business', logo: 'far fa-building' }, { name: 'Technology', logo: 'fas fa-microchip' }, { name: 'Entertainment', logo: 'fas fa-film' }, { name: 'Sports', logo: 'far fa-futbol' }, { name: 'Health', logo: 'fas fa-first-aid' }, { name: 'Science', logo: 'fas fa-flask' }]
const countryList = ['Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'China', 'Colombia', 'Cuba', 'Egypt', 'Germany', 'Greece', 'Hong Kong', 'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'Mexico', 'Netherlands', 'Peru', 'Portugal', 'Russia', 'Turkey', 'Spain', 'Ukraine']

const Home = () => {

    const [newsArray, updateArray] = useState([]);
    const [loader, setLoader] = useState(false)
    const [countryChossen, setCountryChossen] = useState('In')

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
        setLoader({
            loader: true,
        });
    };

    const countries = (query) => {
        let countryCode = getCode(query)
        fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&sortBy=popularity&apiKey=86e2464e6dfe4afe89b811527a204863`).then((response) => {
            return response.json();
        }).then((json) => {
            updateArray(json.articles)
        }).catch(() => {
            console.log("Error in fetch")
        })
        setCountryChossen({ countryChossen: countryCode })
        setLoader({ loader: false })
        console.log(countryChossen)
    }



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