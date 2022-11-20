import React, {useState} from "react";

import ModalBasic from './modal/ModalBasic';

import "./StarRating";
//import "./Sidebar.css";
import styles from "./sidebar.module.css"
import StarRating from "./StarRating";
import Slider from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIosNew, MdArrowForwardIos, MdTranslate } from "react-icons/md";

import reviewData from "./reviewData.json"; //데이터 정보
//import reviewData from "../jsonData/userData.json"; 

import DetailBoard from "./detailR/DetailBoard";
import ShortBoard from "./shortR/ShortBoard";
import Swal from "sweetalert2";

var modalType = "null";

// 받아온 data객체의 placeId 이용해서 리뷰 데이터 끌어오기
// 사이드 바의 틀
export default function Sidebar({ placeId=0, userId=1, data, isClickMarker, clickMarkerHandler }) {
  const onClickToggleButton = () => {
    clickMarkerHandler(!isClickMarker);
  };


  const [modalOpen, setModalOpen] = useState(false); //useState를 통해 모달 노출여부 관리

  const showModal = (type) => { //모달 true

    if(userId === -1){ //로그인상태가 아니면 return
        Swal.fire("로그인 후 이용해주세요");
        document.location ='/login'
        return;
    }
    if(type==="detailReivew"){          
        setModalOpen(true);
        modalType="DR"
    }            
    else if(type==="shortReivew"){
        setModalOpen(true);
        modalType="SR"
    }
    else  
        setModalOpen(false)
};


  return (
    <>
        <div
        className={styles.sidebarWrapper}
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
        <div className={styles.sidebar}>
          <div>
            <h2 className="nameStar">{data?.storeTitle}</h2>
            <br></br>
            <block>
              <StarRating />
            </block>
          </div>

          <br />
          <br />

          <div className={styles.sidebar}>
                <br/>
                    
                <div>
                    <div id={styles.name}> 
                        {reviewData[placeId].name} 
                    </div>
                    
                    <div id={styles.star}>
                        <StarRating starRating = {reviewData[placeId].starRating} length={5}/>       
                    </div>   
                </div>
                
                <br/><br/><br/>


                <div className={styles.slider}>
                <Slider reviewData = {reviewData[placeId]} /> 
                
                </div>

                <br/><br/><br/><br/>


                <div>
                    <button onClick={()=>showModal("detailReivew")}>리뷰 추가</button>
                    {modalOpen && <ModalBasic setModalOpen={setModalOpen} modalType={modalType} userId={userId} placeId={placeId} />}
                    {/* modalOpen이 true면 모달 컴포넌트 띄움  */}
                </div>

                <br/>


                <div className={styles.detailReview}>
                    <DetailBoard reviewData={reviewData[placeId]} userId={userId} placeId={placeId} />   
                </div>

                <br/>

                <div>
                    <button onClick={()=>showModal("shortReivew")}>리뷰 추가</button>
                    {modalOpen && <ModalBasic setModalOpen={setModalOpen} modalType={modalType} userId={userId} placeId={placeId} />}
                    {/* modalOpen이 true면 모달 컴포넌트 띄움  */}
                </div>


                <div className={styles.shortReview}>
                    <ShortBoard reviewData={reviewData[placeId]} placeId={placeId} reviewType="S" /> 
                    
                </div>

            
            </div>

          <br />
          <br />
          <br />

          
        </div>
    </div>
    

    
    </>
    
  );
}
