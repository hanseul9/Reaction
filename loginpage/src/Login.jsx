import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

//회원정보 더미 데이터
const User = {
    email : 'suhan128@icloud.com',
    pw : 'q1w2e3@@@'
}

//로그인 컴포넌트

export default function Login() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false); //이메일 형식이 맞는지
    const [pwValid, setPwValid] = useState(false); //비밀번호 형식이 맞는지
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

    useEffect(() => {//훅 (이메일과 아이디 정확이 입력해야 버튼 활성화)
        if(emailValid && pwValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [emailValid, pwValid]);

    const onClickConfirmButton = () => {
      if(email === User.email && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    } 

    return (
        <div className="page">
          <div className="titleWrap1">
            Reaction map
          </div>
            <br/>
          <div className="titleWrap2">
            아이디와 비밀번호를 입력해주세요
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
          </div>
    
          <div>
            <button onClick={onClickConfirmButton} disabled={notAllow} className='bottomButton'>
              로그인
            </button>
            <button disabled={false} className='bottomButton2'>
              회원가입
            </button>
          </div>
        </div>
      );
}
