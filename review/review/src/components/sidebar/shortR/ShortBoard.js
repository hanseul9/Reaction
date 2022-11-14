import React from "react"; 

import ShortContents from "./ShortContents";




export default function DetailBoard({reviewData}){
    return (
        <>
            <div> 

            {reviewData.shortReview.map((data,i) => (

                <ShortContents
                userId={data.userId}
                userName={data.userName}
                userURL={data.userURL}
                shortContents={data.shortContents}
                time={data.time}
                />

            )) } 
                
            </div>
     
        </>
    );
}