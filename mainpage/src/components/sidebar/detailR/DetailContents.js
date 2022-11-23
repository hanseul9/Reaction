import React from "react";
import styles from "./detail.module.css";
// import "./Detail.css";

export default function DetailContents({userName, userImg, reviewTitle, reviewContents, imgURL}){

    return (
        <>
            <div className={styles.detailBoard}>

                <div className={styles.contents_1}> 
                
                <div> 
                        
                    <div className={styles.box1}>   <img src={userImg} id={styles.userImg} /> </div>
                    <div className={styles.box2}>&nbsp;{userName}:</div>
                    <div className={styles.box3}>&nbsp;{reviewTitle}</div>
                        
                </div>
                    <br/> <br/> <br/>
                    <div id={styles.contents}> 
                        {reviewContents}
                    </div>
                </div>

                <section className={styles.contents_2}>
                    <img src={imgURL} id={styles.reviewImg} />
                </section>
            </div>
               
        </>
    )
}