import React from "react"; 

import DetailContents from "./DetailContents";
import "./scroll.css";



export default function DetailBoard({reviewData}){
    return (
        <>
            <div id="scroll">   {/* id="scroll" */}

            {reviewData.detailReview.map((data,i) => (
                console.log(data.userName),
                <DetailContents 
                userURL={data.userURL}
                userName={data.userName}
                reviewTitle={data.reviewTitle}
                reviewContents={data.reviewContents}
                imgURL={data.imgURL}
                />

            )) } 
            </div>
     
        </>
    );
}