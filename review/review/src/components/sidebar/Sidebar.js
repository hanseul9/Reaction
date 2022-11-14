import React from "react";
import './StarRating'
import './Sidebar.css'
import StarRating from "./StarRating";
import Slider from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviewData from "./reviewData.json"; //데이터 정보
import DetailBoard from "./detailR/DetailBoard";
import ShortBoard from "./shortR/ShortBoard";



//사이드 바의 틀
export default function sidebar({placeId=0}){  // 가게들은 placeId로 구분
    return( 
        <div className="sidebar">
            <br/>
                
            <div>
                <div id="name"> 
                    {reviewData[placeId].name} 
                </div>
                
                <div id="star">
                    <StarRating starRating = {reviewData[placeId].starRating} length={5}/>       
                </div>   
            </div>
            
            <br/><br/><br/>

            <div className="slider">
            <Slider reviewData = {reviewData[placeId]} /> 
            
            </div>

            <br/><br/><br/>

            <div className="detailReview">
                <DetailBoard reviewData={reviewData[placeId]} /> 
                
            </div>

            <br/><br/>

            <div className="shortReview">
                <ShortBoard reviewData={reviewData[placeId]} /> 
                
            </div>

        
        </div>
    ) 
}