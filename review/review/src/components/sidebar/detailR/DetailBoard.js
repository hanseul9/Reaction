import React from "react"; 

import DetailContents from "./DetailContents";
import LocalContents from "./LocalContents";
import styles from "./scroll.module.css";
import userData from "../../userData.json"

<div className={styles.container}></div>


export default function DetailBoard({reviewData, userId, placeId}){
    return (
        <>
            <div id={styles.scroll}>   {/* id="scroll" */}
            {
                //window.localStorage.clear()
            }

            {localStorage.length !== 0 && <LocalContents placeId={placeId} />}

            { reviewData.detailReview.map((data,i) => {

                   return <DetailContents 
                    userImg={userData[data.userId].userImg}
                    userName={userData[data.userId].userName}
                    reviewTitle={data.reviewTitle}
                    reviewContents={data.reviewContents}
                    imgURL={data.imgURL}
                    />
                }
            )}


            </div>
     
        </>
    );
}