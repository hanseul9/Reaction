import React, { useState } from 'react';
import styles from "./shortModal.module.css"
import userData from "../../userData.json"



export default function ShortModal({userId, placeId}) {

    // userId, userName, userImg, reviewTitle, reviewContents, imgURL순
    let data=[]
  
      const [inputs, setInputs] = useState({
          title: '',
          contents: '',
          picture: ''
        });
      
      const { title, contents, picture } = inputs; // 비구조화 할당을 통해 값 추출
      
        const onChange = (e) => {
          const { value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
  
  
          setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
          });
  
        };
  
        const getTime =()=> {
            var today = new Date(); 
  
            var month = ('0' + (today.getMonth() + 1)).slice(-2);
            var day = ('0' + today.getDate()).slice(-2);
            var hours = ('0' + today.getHours()).slice(-2); 
            var minutes = ('0' + today.getMinutes()).slice(-2);
            var seconds = ('0' + today.getSeconds()).slice(-2);
            
            var timeString = month+ '.' +day + '| ' + hours + ':' + minutes + ':'  + seconds +' ';
            
            return timeString
            
        }
      
  
        const Click = () => {
  
           // alert("++++")
  
          // userId, userName, userImg, reviewTitle, reviewContents, imgURL순
          // key값은 time + placeId + userId + reviewType 문자열로  
          // ex)11.16/ 17:37:23 00S << 공백 있음
  
          let time = getTime();
          
        
  
          let key = time + placeId.toString() + userId.toString() + "S"
  
          
          data.push(userId.toString())
  
          userData.map((d,i)=>{
            if(d.userId===userId){
              data.push(d.userName);
              data.push(d.userImg);
            }
          })
  
          data.push(inputs.title)
          data.push(inputs.contents)
          data.push("./"+picture.substring(12))
  
  
          localStorage.setItem(key, data);
  

          
        };
  
      return (
          <>
              <div id={styles.box}>
                  <form>
  
                      <br/>
  
  
                      <br/>
  
                      내용 <br/><br/><br/>
  
                      <section>          
                          <textarea name='contents' id={styles.contents} onChange={onChange} value={contents}
                              placeholder="리뷰를 입력해주세요 (최대 25자)"
                              required
                              minlength="1"
                              maxlength="25"
                             
                              />
                      </section>
  
                      <br/>
  
                      <br/>
  
                      <button onClick={Click} >완료</button>
                  </form>
                  <img id={styles.img} src="./images/hansung.png"></img>
  
  
              </div>
          </>
          
      );
  }