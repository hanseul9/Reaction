import React from "react";
import './StarRating'
import './Sidebar.css'
import StarRating from "./StarRating";
import Slider from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//결과적으로 사이드 바의 제일 뒷배경이 됨
export default function sidebar(){
    return <div className="sidebar">
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

        

        
        <br/><br/>
        sidebar
        테스트 
        <br/>
        
        테스트 <br/>
        테스트 <br/>테스트
    </div>
}