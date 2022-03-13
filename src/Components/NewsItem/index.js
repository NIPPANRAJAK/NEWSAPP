import React,{useState} from "react";
import styles from "./NewsItem.module.css";
const NewsItem =({item})=>{
    const [readmore,setReadMore]=useState(false)
    const click=()=>{
        if(!readmore)
            setReadMore(true);
        else if(readmore)
            setReadMore(false);
    }
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={item.urlToImage}/>
            </div>
            <div className={styles.titleDescription}>
                <p className={styles.titleText}>{item.title}</p>
                <div className={styles.sourceAndShare}>
                    <div>
                        <span>{item.source.name}</span>
                        <i class="fas fa-share-alt"></i>
                    </div>
                    <button onClick={click}><i class={`fas fa-chevron-${readmore?`up`:`down`}`}></i></button>
                </div>
                <div className={`${styles.description} ${readmore ? styles.expand : styles.collapse}`}>
                    <p >Description :</p>
                    <span className={styles.descriptionText}>{item.description}</span>
                    <span className={styles.knowMore} onClick={()=>document.location.href=`${item.url}`}>&nbsp;...more</span>
                </div>
        </div>
            
           

        </div>
    )
}

export default NewsItem;