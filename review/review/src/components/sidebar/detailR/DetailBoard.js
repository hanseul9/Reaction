import React from "react";
import DetailContents from "./DetailContents";
//import "./Detail.css";


export default function DetailBoard(props){
    return (
        <>
            <div className="board">
                { props.data.map ( (data, i) =>
                    ( <DetailContents key={i}
                        userName={data.userName}
                        userURL={data.userURL}
                        imgURL={data.imgURL}
                        reviewTitle={data.reviewTitle}
                        reviewContents={data.reviewContents}
                    /> 
                    ) ) 
                    }
            </div>
            
        </>
    )
}