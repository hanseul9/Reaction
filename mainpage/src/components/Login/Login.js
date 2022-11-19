import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; //페이지 이동
import styles from './LoginStyle.module.css'; //CSS
import UserData from "../jsonData/userData.json"; //데이터 정보


//로그인 컴포넌트
export default function Login() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false); //이메일 형식이 맞는지
    const [pwValid, setPwValid] = useState(false); //비밀번호 형식이 맞는지
    const [notAllow, setNotAllow] = useState(true);//버튼 활성화
    
    var CheckEmail = new Array(); 
    var CheckPw = new Array(); 

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

    useEffect(() => {//훅 (이메일과 아이디 정확히 입력해야 버튼 활성화)
        if(emailValid && pwValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [emailValid, pwValid]
    );

    const onClickConfirmButton = () => {//로그인 버튼을 눌렀을때 액션
      CheckEmail = UserData.map((UserData, idx) => {
        CheckEmail = UserData.userEmail;//CheckEmail에 모든 userEmail이 들어감
        //console.log(CheckEmail);
        return CheckEmail;
      }
      );
      CheckPw = UserData.map((UserData, idx) => {
        CheckPw = UserData.userPassword;//CheckPw에 모든 userPassword가 들어감
        //console.log(CheckPw);
        return CheckPw;
      }
      );
      if(CheckEmail.indexOf(email) != -1) {
        if(CheckPw.indexOf(pw) != -1){
          alert('로그인에 성공했습니다.');
          document.location = '/map';//로그인이 성공되면 맵으로 이동
        }
        else{
          alert('아이디 혹은 비밀번호가 틀렸습니다.');
        }
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    } 

    return (
        <div className={styles.Lpage}>
          <Link to="/"> {/*메인화면으로 뒤로가기*/}
          <button className={styles.backbutton}>
            ❮
          </button>
          </Link>

          <div className={styles.titleWrap1}>
            Reaction map
          </div>
            <br/>
          <div className={styles.titleWrap2}>
            아이디와 비밀번호를 입력해주세요
          </div>
    
          <div className={styles.contentWrap}>
            <div className={styles.inputTitle}>이메일</div>
            <div className={styles.inputWrap}>
              <input 
              type= 'text'
              className={styles.input}
              placeholder='reaction@hansung.ac.kr'
              value={email}
              onChange={handleEmail}/>
            </div>
            <div className={styles.errorMessageWrap}>
              {//이메일 길이가 0을 넘고 이메일 형식이 맞지 않으면 출력
                !emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                )
              }
            </div>
    
            <div style={{marginTop:"26px"}} className={styles.inputTitle}>비밀번호</div >
            <div className={styles.inputWrap}>
              <input 
              type= 'password'
              className={styles.input}
              placeholder='영문, 숫자, 특수문자 8자 이상'
              value={pw}
              onChange={handlePw}/>
            </div>
            <div className={styles.errorMessageWrap}>
              {//비밀번호 길이가 0을 넘고 비밀번호 형식이 맞지 않으면 출력
                !pwValid && pw.length > 0 && (
                    <div>영문, 숫자, 특수문자 8자 이상 입력해주세요.</div>
                )
              }
            </div>
          </div>
    
          <div>
            <button onClick={onClickConfirmButton} disabled={notAllow} className={styles.bottomButton}>
              로그인
            </button>
            <Link to="/login/signup"> {/*회원가입 페이지로 가기*/}
              <button disabled={false} className={styles.bottomButton2}>
                회원가입
              </button>
            </Link>
          </div>
        </div>
      );
}
