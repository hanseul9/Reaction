import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};


export default function SimpleSlider({reviewData}){
  
    return (
      <> 
        
        <Slider {...settings}>

          
          {reviewData.detailReview.map((data,i) => (
             <div>
              <img style={{width:"200px", height:"200px" }} className = "reviewImage" src={data.imgURL}/>
           </div> 
          )) }

        </Slider>
      </>
    );
  }