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

    // 마커 표시할 위치, 내용 가지고 있는 객체 배열입니다
    var positions = [
      {
        placeId: 0,
        title: "나폴레옹과자점 본점",
        content: "<div>나폴레옹과자점 본점</div>",
        locate: "<div>서울 성북구 성북로 7</div>",
        latlng: new kakao.maps.LatLng(37.5889026336539, 127.00509224918207),
      },
      {
        placeId: 1,
        title: "몽마르언덕",
        content: "<div>몽마르언덕</div>",
        locate: "<div>서울 종로구 낙산길 196 4층</div>",
        latlng: new kakao.maps.LatLng(37.58132928039299, 127.01205996422233),
      },
      {
        placeId: 2,
        title: "스타동 한성대점",
        content: "<div>스타동 한성대점</div><div></div>",
        locate: "<div>서울 성북구 삼선교로16길 40</div>",
        latlng: new kakao.maps.LatLng(37.587201649454556, 127.0105380835246),
      },
      {
        placeId: 3,
        title: "시올돈 성북직영점",
        content: "<div>시올돈 성북직영점</div><div></div>",
        locate: "<div>서울 성북구 성북로5길 20 1층</div>",
        latlng: new kakao.maps.LatLng(37.58895448241943, 127.0040109628112),
      },
      {
        placeId: 4,
        title: "100년 설렁탕 본점",
        content: "<div>100년 설렁탕 본점</div><div></div>",
        locate: "<div>서울 성북구 삼선교로 38 1층</div>",
        latlng: new kakao.maps.LatLng(37.588086929452324, 127.00990699145088),
      },
      {
        placeId: 5,
        title: "한성대 양꼬치",
        content: "<div>한성대 양꼬치</div><div></div>",
        locate: "<div>서울 성북구 동소문로6길 14-31</div>",
        latlng: new kakao.maps.LatLng(37.58807809115089, 127.00759158512672),
      },
      {
        placeId: 6,
        title: "방목",
        content: "<div>방목</div><div></div>",
        locate: "<div>서울 성북구 동소문로2길 21</div>",
        latlng: new kakao.maps.LatLng(37.587915907348695, 127.00767082440503),
      },
      {
        placeId: 7,
        title: "종로곱창",
        content: "<div>종로곱창</div><div></div>",
        locate: "<div>서울 성북구 동소문로6길 8</div>",
        latlng: new kakao.maps.LatLng(37.58881236662964, 127.00809550587265),
      },
      {
        placeId: 8,
        title: "홍추곱창카페",
        content: "<div>홍추곱창카페</div><div></div>",
        locate: "<div>서울 성북구 삼선교로10길 16 1층</div>",
        latlng: new kakao.maps.LatLng(37.58721753513167, 127.00911715666365),
      },
      {
        placeId: 9,
        title: "",
        content: "<div>새 장소 추가하기</div>",
        locate: "<div></div>",
        latlng: new kakao.maps.LatLng(setLatitude, setLongitude),
      },
    ];

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
        position: positions[i].latlng, // 마커의 위치
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
