import React,{useState,useEffect} from "react";
import NewsItem from "../NewsItem/index";
import styles from "./NewsList.module.css";
const NewsList =({newsArray})=>{
    
    return(
        <div className={styles.container}>
            {
                newsArray.map((item,index)=><NewsItem item={item}/>)
            }
        </div>
    )
} 
export default NewsList;