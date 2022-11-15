import React, { useCallback, useEffect, useState } from "react";
import ModalBasic from './modal/ModalBasic';


import './StarRating'
import './Sidebar.css'
import StarRating from "./StarRating";
import Slider from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviewData from "./reviewData.json"; //데이터 정보

import detailReview from "./reviewData copy.json"
import DetailBoard from "./detailR/DetailBoard";
import ShortBoard from "./shortR/ShortBoard";

import Swal from "sweetalert2";

var modalType = "null";

//사이드 바의 틀
export default function Sidebar({placeId=0, userId=0}){  // 가게들은 placeId로 구분

    const [modalOpen, setModalOpen] = useState(false); //useState를 통해 모달 노출여부 관리

    
    const showModal = (type) => { //모달 true

        if(userId === -1){ //로그인상태가 아니면 return
            Swal.fire("로그인 후 이용해주세요");
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

            <br/><br/>


            <div>
                <button onClick={()=>showModal("detailReivew")}>리뷰 추가</button>
                {modalOpen && <ModalBasic setModalOpen={setModalOpen} modalType={modalType} userId={userId} placeId={placeId} />}
                {/* modalOpen이 true면 모달 컴포넌트 띄움  */}
            </div>

            <br/>


            <div className="detailReview">
                <DetailBoard reviewData={reviewData[placeId]} userId={userId} placeId={placeId} />   
            </div>

            <br/>

            <div>
                <button onClick={()=>showModal("shortReivew")}>리뷰 추가</button>
                {modalOpen && <ModalBasic setModalOpen={setModalOpen} modalType={modalType} userId={userId} placeId={placeId} />}
                {/* modalOpen이 true면 모달 컴포넌트 띄움  */}
            </div>


            <div className="shortReview">
                <ShortBoard reviewData={reviewData[placeId]} /> 
                
            </div>

        
        </div>
    ) 
}