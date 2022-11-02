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

//회원가입 컴포넌트
export default function Signup() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwcheck, setPwcheck] = useState('');
    const [birth, setBirth] = useState('');
    const [name, setName] = useState('');

    const [emailValid, setEmailValid] = useState(false); //이메일 형식이 맞는지
    const [pwValid, setPwValid] = useState(false); //비밀번호 형식이 맞는지
    const [pwcheckValid, setPwcheckValid] = useState(false); //비밀번호 형식이 맞는지
    const [birthValid, setBirthValid] = useState(false); //생년월일 형식이 맞는지
    const [nameValid, setNameValid] = useState(false); //이름 형식이 맞는지
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

    const handlePwcheck = (e) => {
      setPwcheck(e.target.value);
      if (e.target.value === pw) {//비밀번호 확인란에 입력한 값이 위에 입력한 비밀번호와 같으면
        setPwcheckValid(true);
      } else {
        setPwcheckValid(false);
      }
    };

    const handleName = (e) => {
      setName(e.target.value);
      if(e.target.value.length < 2 || e.target.value.length > 5){
        setNameValid(false);
      } else{
        setNameValid(true);
      }
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
        if(emailValid && pwValid && pwcheckValid && birthValid && nameValid) {
          setNotAllow(false); //버튼 활성화
          return;
        }
        setNotAllow(true); //기본적으로 버튼 비활성화
      }, [emailValid, pwValid, pwcheckValid, birthValid, nameValid]);

    const onClickConfirmButton = () => { //회원가입 버튼을 눌렀을때 액션
      if(email === User.email && pw === User.pw && name===User.name) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    const overlapCheckButton = () => { //중복확인 버튼을 눌렀을때 액션
      if(email === User.email) {
        alert('이미 사용중인 아이디 입니다.')
      } else {
        alert("사용 가능한 아이디 입니다.");
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
              <button onClick={overlapCheckButton} className='overlapCheck'>중복확인</button>
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
            <div style={{marginTop:"26px"}} className="inputTitle">비밀번호 확인</div >
            <div className="inputWrap">
              <input 
              type= 'password'
              className="input" 
              placeholder='영문, 숫자, 특수문자 8자 이상'
              value={pwcheck}
              onChange={handlePwcheck}/>
            </div>
            <div className="errorMessageWrap">
              {//비밀번호 확인 길이가 0을 넘고 비밀번호가 맞지 않을때 출력
                !pwcheckValid && pwcheck.length > 0 && (
                    <div>비밀번호가 정확하지 않습니다.</div>
                )
              }
            </div>
            <div style={{marginTop:"26px"}} className="inputTitle">이름</div >
            <div className="inputWrap">
              <input 
              type= 'text'
              className="input" 
              placeholder='이름 입력'
              value={name}
              onChange={handleName}/>
            </div>
            <div className="errorMessageWrap">
              {//이름을 썼는데, 이름 길이가 2자 미만이거나 5자 이상일 경우 출력
                !nameValid && name.length > 0 && (
                    <div>2글자 이상 5글자 미만으로 입력해주세요.</div>
                )
              }
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
                    <div>YYYYMMDD 형식으로 입력 해주세요.</div>
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
