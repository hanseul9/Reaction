import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div> 
        
        <Slider {...settings}>
          <div>
            <img className = "reviewImage" src="test.PNG"></img>
          </div>
          <div>
            <img className = "reviewImage" src="test.PNG"></img>
          </div>
          <div>
            <img className = "reviewImage" src="test.PNG"></img>  
          </div>
          <div>
            <img className = "reviewImage" src="test.PNG"></img>
          </div>
          <div>
            <img className = "reviewImage" src="test.PNG"></img>
          </div>
        </Slider>
      </div>
    );
  }
}