import React, { useState } from 'react';
import styles from "./detailModal.module.css"
import userData from "./../../userData.json"
import reviewData from "./test.json"

export default function DetailModal({userId, placeId}) {


  // userId, userName, userImg, reviewTitle, reviewContents, imgURL순

  //key 값 : placeId + userId

 var plus = ""

//  const plusData = {
//     "userId" : userId,
//     "userName" : "",
//     "userImg" : "",

//     "reviewTitle" : "",
//     "reviewContents" : "",
//     "imgURL" : ""
//  }

var plusData = []


  const set=()=>{

    inputs.picture = inputs.picture.substring(12); //fake경로 잘라줌

    //넣어줄 데이터 정리-------------------
    userData.map((data,i)=>{
      if(data.userId === userId){ //유저정보도 보내주기 위해
        plusData.push(userId.toString())
        plusData.push(data.userName)
        plusData.push(data.userImg)
      }
    })

    plusData.push(inputs.title)
    plusData.push(inputs.contents)
    plusData.push("./"+inputs.picture)
    
   
    let size = localStorage.length
    let key = placeId.toString()+userId.toString(); 


    console.log(key);
          
    alert("aaaaaaaa");


    console.log(localStorage.length)


    console.log(plusData)
   
    localStorage.setItem(key, (plusData));
    console.log(localStorage.getItem("00"));

    console.log(localStorage.length)


    //window.localStorage.clear();
   
    
    console.log(localStorage.length)

    alert("aaaaaaaa");


 
  }

    const [inputs, setInputs] = useState({
        title: '',
        contents: '',
        picture: ''
      });
    
    const { title, contents, picture } = inputs; // 비구조화 할당을 통해 값 추출
    
      const onChange = (e) => {

        

        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출   
        
        //console.log(name);
        //console.log(value);

        //console.log(inputs);

        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });

        //console.log(inputs);
      };
    

    const Click= () =>{

      
      

      set();

        // setInputs({
        //   title: '',
        //   contents: '',
        //   picture: '',
        // })
        
        
    };

    return (
        <>
            <div id={styles.box}>
                <form>

                    <br/>

                    <section>
                        제목 <br/>
                        <textarea name='title' id={styles.title} onChange={onChange} value={title}
                            placeholder="제목을 입력해주세요"
                            required
                            minLength="1"
                            />
                    </section>

                    <br/>

                    내용 

                    <section>          
                        <textarea name='contents' id={styles.contents} onChange={onChange} value={contents}
                            placeholder="리뷰를 입력해주세요 (최소 10자 이상)"
                            required
                            maxLenth="1000"
                            minLength="10"
                            />
                    </section>

                    <br/>

                    <section>
                        사진 업로드
                        <input name='picture' onChange={onChange} value={picture}
                        type="file"></input>
                    </section>

                    <br/>

                    <button onClick={Click} >완료</button>
                </form>


            </div>
        </>
        
    );
}
