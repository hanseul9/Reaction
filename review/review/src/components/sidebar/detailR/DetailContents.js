import React from "react";
import "./detail.css";

export default function DetailContents({userName, userImg, reviewTitle, reviewContents, imgURL}){

    return (
        <>
            <div className="detailBoard">

                <section className="contents_1"> 
                     <div> 
                        <img src={userImg} id="userImg" /> 
                        &nbsp;
                        {userName}
                        &nbsp;
                        {reviewTitle}
                    </div>
                        
                    <div id="contents"> 
                        {reviewContents}
                    </div>
                </section>

                <section className="contents_2">
                    <img src={imgURL} id="reviewImg" />
                </section>
            </div>
               
        </>
    )
}