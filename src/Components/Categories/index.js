import React from "react";
import styles from "./Categories.module.css";
const Categories =({categoryClick,categoryList})=>{
    
    const click=(item)=>{
        categoryClick(item);
    }

    return(
        <div className={styles.container}>
            <p className={styles.header}>Select category:</p>
            <div className="SelectC">
            <div className={styles.lists}>
            {
                categoryList.map((category)=><button onClick={()=>click(category.name)}>
                <i class={category.logo}></i>
                <span>{category.name}</span>
                </button>)
            }
            </div>
            </div>
        </div>
    )
}

export default Categories;