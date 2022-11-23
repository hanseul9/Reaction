import React, { useState } from 'react';
import styles from "./detailModal.module.css"
import userData from "../../userData.json"

export default function DetailModal({userId, placeId}) {

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

        console.log("+++++++++++++++++++")
        console.log(name);
        console.log(value);

        console.log(inputs);

        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });

        console.log(inputs);
      };

      const getTime =()=> {
          var today = new Date(); 

          var month = ('0' + (today.getMonth() + 1)).slice(-2);
          var day = ('0' + today.getDate()).slice(-2);
          var hours = ('0' + today.getHours()).slice(-2); 
          var minutes = ('0' + today.getMinutes()).slice(-2);
          var seconds = ('0' + today.getSeconds()).slice(-2);
          
          var timeString = month+ '.' +day + '/ ' + hours + ':' + minutes + ':'  + seconds +' ';
          
          console.log(timeString);

          return timeString
          
      }
    

      const Click = () => {


        // userId, userName, userImg, reviewTitle, reviewContents, imgURL순
        // key값은 time + placeId + userId + reviewType 문자열로  
        // ex)11.16/ 17:37:23 00R << 공백 있음

        let time = getTime();
        
        console.log(time > "16/ 12:30:11")

        // console.log(localStorage.key(0)[10])
        // console.log(localStorage.key(0)[11])
        // console.log(localStorage.key(0)[12])

        //for문으로----------------------
        
        for(let i=0;i<localStorage.length;i++){

          if(localStorage.length === 0 ) //데이터 없으면 나감
            break;
          
          if(localStorage.key(i)[16]===placeId.toString() 
            && localStorage.key(i)[17]===userId.toString()
            && localStorage.key(i)[18]==="R"){
              console.log("아이템삭제")
              console.log(time)
              localStorage.removeItem(localStorage.key(i))
            }
              
        }

        //localStorage.map((storage, i)=>{
          //console.log(storage[i])
          // if(storage.key(i)[16]===placeId.toString() 
          //   && storage.key(i)[17]===userId.toString()
          //   && storage.key(i)[18]==="R")
          //   console.log("1111")
        //})
        //console.log(localStorage.getItem(localStorage.key(2)))

        //alert("++++")


        let key = time + placeId.toString() + userId.toString() + "R"

        console.log(key)


        // if(localStorage.getItem(key) === null){ //이미 있으면 제거
        //   //console.log("================================================")
        //   localStorage.removeItem(key)
        // }

        //alert("++++")


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

        console.log(data)

        localStorage.setItem(key, data);




        console.log(localStorage);

        //alert("++++")

        
        //  setInputs({
        //    title: '',
        //    contents: '',
        //    picture: '',
        //  })

      };

    return (
        <>
            <div id={styles.box}>
                <form>

                    <br/>

                    <section>
                        제목 <br/><br/>
                        <textarea name='title' id={styles.title} onChange={onChange} value={title}
                            placeholder="제목을 입력해주세요"
                            required
                            minLength="1"
                            />
                    </section>

                    <br/>

                    내용 <br/>

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
