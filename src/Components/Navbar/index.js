import React,{useState} from "react";
import styles from "./Navbar.module.css";

const Navbar =({search})=> {
    
    const [text,setText]=useState('')
    
    const handleChange=(event)=>{
        setText(event.target.value)
    }

    const click=()=>{
        search(text);
        setText('')
    }

    return(
        <div className={styles.container}>
            
            <h1 className={styles.header}>NEWS</h1>
            

            <div className={styles.search}>
                <input className="searchBox" placeholder="Search news..." onChange={handleChange} value={text} />
                <button onClick={click}>Search</button>
            </div>

        </div>
    )
}

export default Navbar;