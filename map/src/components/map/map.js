/*global kakao*/ 
import React, { useEffect } from 'react'

const Map = () => {

useEffect(()=>{
    var container = document.getElementById('map');  // 지도 표시할 div
    var options = {
        center: new kakao.maps.LatLng(37.58575786444733, 127.0098896998893), // 지도 중심 좌표
        level: 4 // 지도 확대 레벨
    };

    // 지도 생성
    var map = new kakao.maps.Map(container, options);

    // 마커 표시할 위치, 내용 가지고 있는 객체 배열입니다 
    var positions = [
        { placeId: 1, content: '<div>나폴레옹과자점 본점</div>', locate: '<div>서울 성북구 성북로 7</div>',  latlng: new kakao.maps.LatLng(37.5889026336539, 127.00509224918207) },
        { placeId: 2, content: '<div>몽마르언덕</div>', locate: '<div>서울 종로구 낙산길 196 4층</div>', latlng: new kakao.maps.LatLng(37.58132928039299, 127.01205996422233) },
        { placeId: 3, content: '<div>스타동 한성대점</div><div></div>', locate: '<div>서울 성북구 삼선교로16길 40</div>', latlng: new kakao.maps.LatLng(37.587201649454556, 127.0105380835246) },
        { placeId: 4, content: '<div>시올돈 성북직영점</div><div></div>', locate: '<div>서울 성북구 성북로5길 20 1층</div>', latlng: new kakao.maps.LatLng(37.58895448241943, 127.0040109628112) },
        { placeId: 5, content: '<div>100년 설렁탕 본점</div><div></div>', locate: '<div>서울 성북구 삼선교로 38 1층</div>', latlng: new kakao.maps.LatLng(37.588086929452324, 127.00990699145088) },
        { placeId: 6, content: '<div>한성대 양꼬치</div><div></div>', locate: '<div>서울 성북구 동소문로6길 14-31</div>', latlng: new kakao.maps.LatLng(37.58807809115089, 127.00759158512672) },
        { placeId: 7, content: '<div>방목</div><div></div>', locate: '<div>서울 성북구 동소문로2길 21</div>', latlng: new kakao.maps.LatLng(37.587915907348695, 127.00767082440503) },
        { placeId: 8, content: '<div>종로곱창</div><div></div>', locate: '<div>서울 성북구 동소문로6길 8</div>', latlng: new kakao.maps.LatLng(37.58881236662964, 127.00809550587265) },
        { placeId: 9, content: '<div>홍추곱창카페</div><div></div>', locate: '<div>서울 성북구 삼선교로10길 16 1층</div>', latlng: new kakao.maps.LatLng(37.58721753513167, 127.00911715666365) }
    ];

    // 마커 이미지 주소
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i ++) {
        // 마커 이미지 크기
        var imageSize = new kakao.maps.Size(24, 35); 

        // 마커 이미지 생성   
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

        // 마커 생성
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커의 위치
            image: markerImage // 마커 이미지 
        });

        // 마커에 표시 인포윈도우 생성 
        var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px; width:100%"><div style="font-weight: 600; margin-bottom: 3px;">${positions[i].content}` + 
            `<div style="font-weight: 500; margin-bottom: 3px;">${positions[i].locate}`// 인포윈도우 표시할 내용
        });
    
        // 마커에 mouseover 이벤트, mouseout 이벤트 등록
        // 이벤트 리스너로는 클로저 만들어 등록 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        
        // 마커를에 클릭 이벤트 등록
        kakao.maps.event.addListener(marker, 'click', function() {
            //TODO
        });
    }

    // 인포윈도우 표시하는 클로저 만드는 함수
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우 닫는 클로저 만드는 함수 
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }

    })

    return (
        <div>
            <div id="map" style={{width:"100%", height:"98vh"}}></div> 
        </div>
    )
}

export default Map;