import React from "react";
import "./short.css"

 

export default function ShortContents({userId, userName, userImg, shortContents, time}){
    return (
        <>
            <div className="shortContents">

                <section className="box">
                    <img src={userImg} id="userImg"></img> 
                    &nbsp;
                    {userName}
                    &nbsp;
                </section>

                <section className="box">
                    {shortContents}
                    &nbsp;
                </section>
                    
                <section className="box">
                    {time}
                </section>

                <hr id="line"></hr>


            </div>
        </>
    )
}