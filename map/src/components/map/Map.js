/*global kakao*/
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MarkerModal from "./MarkerModal";

const Map = () => {
  const [sidebarData, setSidebarData] = useState({});
  const [isClickMarker, setIsClickMarker] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [ is_modal, setModal ] = useState(false);
  
  useEffect(() => {
    var container = document.getElementById("map"); // 지도 표시할 div
    var options = {
      center: new kakao.maps.LatLng(37.58575786444733, 127.0098896998893), // 지도 중심 좌표
      level: 4, // 지도 확대 레벨
    };

    // 지도 생성
    var map = new kakao.maps.Map(container, options);

    // 마커 이미지 주소
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지 크기
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지 생성
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커 생성
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(positions[i].lat, positions[i].lng), // 마커의 위치
        image: markerImage, // 마커 이미지
      });

      // 마커에 표시 인포윈도우 생성
      var infowindow = new kakao.maps.InfoWindow({
        content:
          `<div style="padding:5px; width:100%"><div style="font-weight: 600; margin-bottom: 3px;">${positions[i].content}` +
          `<div style="font-weight: 500; margin-bottom: 3px;">${positions[i].locate}`, // 인포윈도우 표시할 내용
      });

      // 마커에 mouseover 이벤트, mouseout 이벤트 등록
      // 이벤트 리스너로는 클로저 만들어 등록
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록
      kakao.maps.event.addListener(marker, "mouseover", makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));

      const sidebarInfo = { storeTitle: positions[i].title, placeId: positions[i].placeId };
      // 마커에 클릭 이벤트 등록
      kakao.maps.event.addListener(marker, "click", function () {
        setSidebarData(sidebarInfo);
        setIsClickMarker(true);
      });
    }

    // 인포윈도우 표시하는 클로저 만드는 함수
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우 닫는 클로저 만드는 함수
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }

    // 지도 클릭 시 마커 표시하기
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다.
      const latlng = mouseEvent.latLng;
      
      // 위도 경도 값을 useState를 이용해서 useEffect 밖으로 빼냅니다.
      setLatitude(latlng.getLat())
      setLongitude(latlng.getLng())
      
      // 마커 위치를 클릭한 위치로 옮깁니다.
      marker.setPosition(latlng);
      
      // 마커를 지도상에 보여줍니다.
      marker.setMap(map);
    })

    // 마커에 클릭이벤트를 등록하기
    kakao.maps.event.addListener(marker, 'click', function(){
      // 마커 생성 모달창을 띄워준다. 
      setModal(true)
    })

  });

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "98vh" }}></div>
      <Sidebar
        data={sidebarData}
        isClickMarker={isClickMarker}
        clickMarkerHandler={setIsClickMarker}
      />
      {is_modal? <MarkerModal close={closeModal} latitude={latitude} longitude={longitude} />
      : null }
    </div>
  );
};

export default Map;
