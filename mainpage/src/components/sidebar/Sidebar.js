import React from "react";
import "./StarRating";
import "./Sidebar.css";
import StarRating from "./StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIosNew, MdArrowForwardIos, MdTranslate } from "react-icons/md";

import reviewData from "./detailR/detailR.json"; // 데이터 정보 끌어다가 여기서 컴포넌트 호출할때 인자로 넘겨줌
import DetailBoard from "./detailR/DetailBoard";

// 받아온 data객체의 placeId 이용해서 리뷰 데이터 끌어오기
// 사이드 바의 틀
export default function Sidebar({ data, isClickMarker, clickMarkerHandler }) {
  const onClickToggleButton = () => {
    clickMarkerHandler(!isClickMarker);
  };
  return (
    <div
      className="sidebarWrapper"
      style={{
        transform: `${isClickMarker ? "translateX(0px)" : "translateX(340px)"}`,
        transition: "all 1s",
      }}
    >
      <div
        onClick={onClickToggleButton}
        style={{
          zIndex: 999,
          width: "60px",
          height: "60px",
          backgroundColor: "white",
          borderRadius: "10px",
          backgroundColor: "rgba(178, 235, 244)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isClickMarker ? (
          <MdArrowForwardIos
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        ) : (
          <MdArrowBackIosNew
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        )}
      </div>
      <div className="sidebar">
        <div>
          <h2 className="nameStar">{data?.storeTitle}</h2>
          <br></br>
          <block>
            <StarRating />
          </block>
        </div>

        <br />
        <br />

        <div className="slider">
          <Slider />
        </div>

        <br />
        <br />
        <br />

        <div className="detailReview">
          <DetailBoard data={reviewData} />
        </div>
      </div>
    </div>
  );
}
