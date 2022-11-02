import React from "react";
import './StarRating'
import './Sidebar.css'
import StarRating from "./StarRating";
import Slider from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviewData from "./detailR/detailR.json"; //데이터 정보 끌어다가 여기서 컴포넌트 호출할때 인자로 넘겨줌
import DetailBoard from "./detailR/DetailBoard";


//사이드 바의 틀
export default function sidebar(){
    return( 
        <div className="sidebar">
            <br/>
            <div>
                <h2 className="nameStar">가게 이름</h2>

                <block>
                    <StarRating /> 
                </block>   
            </div>
            
            <br/><br/>

            <div className="slider">
                <Slider /> 
            </div>

            <br/><br/><br/>

            <div className="detailReview">
                <DetailBoard data={reviewData} /> 
            </div>

        
        </div>
    ) 
}