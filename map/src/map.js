/*global kakao*/ 
import React, { useEffect } from 'react'

const Location=()=>{

useEffect(()=>{
    var container = document.getElementById('map');  // 지도 표시할 div
    var options = {
        center: new kakao.maps.LatLng(37.58265616286476, 127.01026855826187), // 지도 중심 좌표
        level: 3 // 지도 확대 레벨
    };

    // 지도 생성
    var map = new kakao.maps.Map(container, options);

    // 지도 위에 마커 생성
    var markerPosition  = new kakao.maps.LatLng(37.58265616286476, 127.01026855826187); 
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 마커를 지도에 표시
    marker.setMap(map);

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성
    var iwContent = '<div style="padding:5px;">한성대학교</div>', // 인포윈도우에 표출될 내용(HTML 문자열, document element 가능)
    iwRemoveable = false; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼 표시

    // 인포윈도우 생성
    var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
    });

    // 마커에 클릭이벤트 등록
    kakao.maps.event.addListener(marker, 'click', function() {
    // 마커 위에 인포윈도우 표시
    infowindow.open(map, marker);  
    });

    }, [])


    return (
        <div>
            <div id="map" style={{width:"100%", height:"100vh"}}></div> 
        </div>
    )
}

export default Location;