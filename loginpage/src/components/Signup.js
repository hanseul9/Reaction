import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

//회원정보 더미 데이터
const User = {
    email : 'reaction@hansung.ac.kr',
    pw : 'qwerty123@',
    birth : 19991111,
    name : 'Limsuhan'
}

//로그인 컴포넌트
export default function Signup() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [birth, setBirth] = useState('');
    const [name, setName] = useState('');

    const [emailValid, setEmailValid] = useState(false); //이메일 형식이 맞는지
    const [pwValid, setPwValid] = useState(false); //비밀번호 형식이 맞는지
    const [birthValid, setBirthValid] = useState(false); //생년월일 형식이 맞는지
    const [notAllow, setNotAllow] = useState(true);//버튼 활성화
   
    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =//                     자바스크립트 정규표현식
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };

    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };

    const handleName = (e) => {
      setName(e.target.value);
    };

    const handleBirthday = (e) => {
        setBirth(e.target.value);
        const regex =//자바스크립트 정규표현식
        /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
        if (regex.test(e.target.value)) {//정규표현식에 맞으면
          setBirthValid(true);
        } else {
            setBirthValid(false);
        }
      };

    useEffect(() => {//훅 (이메일과 비밀번호와 생년월일 정확히 입력해야 버튼 활성화)
        if(emailValid && pwValid && birthValid) {
          setNotAllow(false); //버튼 활성화
          return;
        }
        setNotAllow(true); //기본적으로 버튼 비활성화
      }, [emailValid, pwValid, birthValid]);

    const onClickConfirmButton = () => { //버튼을 눌렀을때 액션
      if(email === User.email && pw === User.pw && name===User.name) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    } 

    return (
        <div className="page">
          <div>
          <button className='backbutton'>
            ❮
          </button>
          </div>

          <div className="titleWrap1">
            회원가입
          </div>
    
          <div className="contentWrap">
            <div className="inputTitle">이메일</div>
            <div className="inputWrap">
              <input 
              type= 'text'
              className="input" 
              placeholder='reaction@hansung.ac.kr'
              value={email}
              onChange={handleEmail}/>
            </div>
            <div className="errorMessageWrap">
              {//이메일 길이가 0을 넘고 이메일 형식이 맞지 않으면 출력
                !emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                )
                //더미 데이터에 동일한 이메일이 있으면 출력
              }
            </div>
    
            <div style={{marginTop:"26px"}} className="inputTitle">비밀번호</div >
            <div className="inputWrap">
              <input 
              type= 'password'
              className="input" 
              placeholder='영문, 숫자, 특수문자 8자 이상'
              value={pw}
              onChange={handlePw}/>
            </div>
            <div className="errorMessageWrap">
              {//비밀번호 길이가 0을 넘고 비밀번호 형식이 맞지 않으면 출력
                !pwValid && pw.length > 0 && (
                    <div>영문, 숫자, 특수문자 8자 이상 입력해주세요.</div>
                )
              }
            </div>
            <div style={{marginTop:"26px"}} className="inputTitle">이름</div >
            <div className="inputWrap">
              <input 
              type= 'text'
              className="input" 
              value={name}
              placeholder='이름 입력'
              onChange={handleName}/>
            </div>
            <div style={{marginTop:"26px"}} className="inputTitle">생년월일</div >
            <div className="inputWrap">
              <input 
              type= 'text'
              className="input" 
              placeholder='YYYYMMDD'
              value={birth}
              onChange={handleBirthday}/>
            </div>
            <div className="errorMessageWrap">
              {//생년월일 길이가 0을 넘고 형식에 맞지 않으면 출력
                !birthValid && birth.length > 0 && (
                    <div>YYYYMMDD 형식으로 입력 해주세요</div>
                )
              }
            </div>
          </div>
    
          <div>
            <button onClick={onClickConfirmButton} disabled={notAllow} className='bottomButton'>
              회원가입 완료
            </button>
            
          </div>
        </div>
      );
}