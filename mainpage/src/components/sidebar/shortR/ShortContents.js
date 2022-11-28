import React from "react";
import styles from "./short.module.css"

 

export default function ShortContents({userId, userName, userImg, shortContents, time}){
    return (
        <>
            <div className={styles.shortContents}>

                <div className={styles.box1}>
                    <img src={userImg} id={styles.userImg}></img> 
                    &nbsp;
                    
                </div>

                <div className={styles.box2}>
                    {userName}
                        &nbsp;
                </div>

                <div className={styles.box3}>
                    {shortContents}
                    &nbsp;
                </div>
                    
                <div className={styles.box4}>
                    {time}
                </div>
<br/>   <br/>  
                <hr id="line"></hr>


            </div>
        </>
    )
}