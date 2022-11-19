import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return(
        <div className='Errpage'>
            <h1>404 Error!</h1>
            <h2>존재하지 않는 페이지 입니다.</h2>
            <Link to="/">
                <button className='loginbutton'>
                    로그인 화면으로 가기
                </button>
            </Link>
        </div>
        
    )
}