import React from "react";
import "./Detail.css";

export default function DetailContents({userName, userURL, imgURL, reviewTitle, reviewContents}){
    return (
        <>
            <div className="board">

                <section className="contents_1"> 
                    <div> 
                        <img src={userURL} id="userImg" /> 
                        &nbsp;
                         {userName}
                         &nbsp;
                         {reviewTitle}
                    </div>
                    <br/>
                    <div> 
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