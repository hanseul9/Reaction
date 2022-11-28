import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const MarkerModal = ({ setPositionData, longitude, latitude, close, address }) => {
  // 사용자가 지정한 마커 이름을 담아냅니다.
  const [title, setTitle] = useState();

  const selectTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  // 마커를 생성할 때 사용되는 함수입니다.
  // positions라는 상태변수에 그 위치의 정보를 저장하면 useEffect가 다시 한번 실행되면서 마커가 렌더됨
  const addMarker = () => {
    const clickedPosition = {
      title: title,
      content: `<div>${title}</div>`,
      locate: `<div>${address}</div>`,
      lat: latitude,
      lng: longitude,
    };
    setPositionData((prev) => [...prev, { placeId: prev.length, ...clickedPosition }]);

    // 마커 생성 모달 창을 닫습니다.
    close();
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Component onClick={close} />
      <ModalComponent>
        <ModalExitBtn onClick={close}>
          <CloseIcon />
        </ModalExitBtn>
        <ModalHeader>마커를 생성하시겠습니까?</ModalHeader>
        <ModalInput>
          <TextField
            id="standard-basic"
            label="장소를 입력해주세요."
            style={{ width: "100%" }}
            onChange={selectTitle}
          />
        </ModalInput>
        <ModalButtonContainer>
          <ModalSubmitBtn onClick={addMarker}>마커 생성</ModalSubmitBtn>
        </ModalButtonContainer>
      </ModalComponent>
    </React.Fragment>
  );
};

const Component = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 10;
`;

const ModalComponent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 300px;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ModalHeader = styled.div`
  margin-top: 30px;
  font-family: 'MICEGothic';
  font-weight: 600;
  font-size: 20px;
`;

const ModalInput = styled.div`
  font-family: 'MICEGothic';
  box-sizing: border-box;
  width: 50%;
`;
const ModalButtonContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 30px;
`;
const ModalSubmitBtn = styled.button`
  width: 100%;
  background-color: #4dcef5;
  border: none;
  outline: none;
  padding: 10px 0;
  cursor: pointer;
  font-family: 'MICEGothic';
  font-weight: 600;
  font-size: 18px;
  border-radius: 4px;
  &:hover {
    opacity: 0.7;
  }
`;
const ModalExitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 12px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  color: black;
`;

export default MarkerModal;
