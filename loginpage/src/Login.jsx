import React from 'react'

//로그인 컴포넌트

export default function Login() {
    return (
        <div className="page">
          <div className="titleWrap">
            Reaction map
            <br/>
            아이디와 비밀번호를 입력해주세요
          </div>
    
          <div className="contentWrap">
            <div className="inputTitle">이메일</div>
            <div className="inputWrap">
              <input className="input" placeholder='reaction@hansung.ac.kr'/>
            </div>
            <div className="errorMessageWrap">
              올바른 이메일을 입력해주세요
            </div>
    
            <div style={{marginTop:"26px"}} className="inputTitle">비밀번호</div >
            <div className="inputWrap">
              <input className="input" placeholder='영문, 숫자, 특수문자 8자 이상'/>
            </div>
            <div className="errorMessageWrap">
              영문, 숫자, 특수문자 8자 이상 입력해주세요
            </div>
          </div>
    
          <div>
            <button disabled={true} className='bottomButton'>
              로그인
            </button>
            <button disabled={true} className='bottomButton'>
              회원가입
            </button>
          </div>
        </div>
      );
}
