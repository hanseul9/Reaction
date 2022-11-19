/*global kakao*/
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MarkerModal from "./MarkerModal";
import positions from "./positions.json";

const Map = () => {
  const [sidebarData, setSidebarData] = useState({});
  const [isClickMarker, setIsClickMarker] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [is_modal, setModal] = useState(false);
  const [positionData, setPositionData] = useState(positions);
  const [address, setAddress] = useState("");
  const [isCloseModal, setIsCloseModal] = useState(false);

  useEffect(() => {
    var container = document.getElementById("map"); // 지도 표시할 div
    var options = {
      center: new kakao.maps.LatLng(37.58575786444733, 127.0098896998893), // 지도 중심 좌표
      level: 4, // 지도 확대 레벨
      disableDoubleClickZoom: true, // 지도 더블 클릭시 확대 금지
    };

    // 지도 생성
    var map = new kakao.maps.Map(container, options);
    // 마커 이미지 주소
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    // 마커 이미지 크기
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지 생성
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var newMarker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      image: markerImage,
    });

    for (var i = 0; i < positionData.length; i++) {
      // 마커 생성
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(positionData[i].lat, positionData[i].lng), // 마커의 위치
        image: markerImage, // 마커 이미지
      });

      // 마커에 표시 인포윈도우 생성
      var infowindow = new kakao.maps.InfoWindow({
        content:
          `<div style="padding:5px; width:100%"><div style="font-weight: 600; margin-bottom: 3px;">${positionData[i].content}` +
          `<div style="font-weight: 500; margin-bottom: 3px;">${positionData[i].locate}`, // 인포윈도우 표시할 내용
      });

      // 마커에 mouseover 이벤트, mouseout 이벤트 등록
      // 이벤트 리스너로는 클로저 만들어 등록
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록
      kakao.maps.event.addListener(marker, "mouseover", makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));

      const sidebarInfo = {
        storeTitle: positionData[i].title,
        placeId: positionData[i].placeId,
      };
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

    // 추가한 마커의 인포윈도우
    var addedInfoWindow = new kakao.maps.InfoWindow({
      content:
        `<div  style="padding:5px; width:100%; cursor:pointer"><div style="font-weight: 600; margin-bottom: 3px;"><div id='addedInfoWindow'>새로운 장소 추가하기</div>` +
        `<div style="font-weight: 500; margin-bottom: 3px;">`,
    });

    // 지도 더블 클릭 시 마커 표시하기
    kakao.maps.event.addListener(map, "dblclick", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다.
      const latlng = mouseEvent.latLng;

      // 위도 경도 값을 useState를 이용해서 useEffect 밖으로 빼냅니다.
      setLatitude(latlng.getLat());
      setLongitude(latlng.getLng());

      newMarker.setPosition(latlng);
      kakao.maps.event.addListener(
        newMarker,
        "mouseover",
        makeOverListener(map, newMarker, addedInfoWindow)
      );

      // 좌표로 주소를 알아내는 함수
      function getAddr(lat, lng) {
        const geocoder = new kakao.maps.services.Geocoder();

        let coord = new kakao.maps.LatLng(lat, lng);
        let callback = function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            setAddress(result[0].road_address.address_name);
          }
        };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
      }
      getAddr(latlng.getLat(), latlng.getLng());
    });

    // 마커에 클릭이벤트를 등록하기
    kakao.maps.event.addListener(newMarker, "click", function () {
      // 마커 생성 모달창을 띄워준다.
      setModal(true);
    });

    // 장소를 추가하지않고 모달창을 닫으면 생성됐던 마커도 사라짐
    if (isCloseModal) {
      newMarker.setMap(null);
      setIsCloseModal(false);
    }
  }, [positionData, isCloseModal]);

  const closeModal = () => {
    setModal(false);
    setIsCloseModal(true);
  };

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "98vh" }}></div>
      <Sidebar
        data={sidebarData}
        isClickMarker={isClickMarker}
        clickMarkerHandler={setIsClickMarker}
      />
      {is_modal ? (
        <MarkerModal
          close={closeModal}
          setPositionData={setPositionData}
          latitude={latitude}
          longitude={longitude}
          address={address}
        />
      ) : null}
    </div>
  );
};

export default Map;
