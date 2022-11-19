import React from "react"; 

import ShortContents from "./ShortContents";
//import LocalContents from "../LocalContents";
import userData from "../../userData.json"



export default function ShortBoard({reviewData, placeId, reviewType}){

    var setArray = [];
    var array= [];
    var data=[];
    var size;

    // userId, userName, userImg, reviewTitle, reviewContents, imgURL순

     function checkLocal(localStorage){

        //            00R<< placeId userId reviewType
        //            index   16      17      18
        //key값 : 0월.날짜/ 시간:0분:0초 00R 이런 형태
        
        console.log( reviewType)
        //console.log(localStorage.key(1)[18])

        for(let i=0;i<localStorage.length;i++){
            if(localStorage.key(i)[16] === placeId.toString() && localStorage.key(i)[18]=== reviewType)
                setArray.push(localStorage.key(i));
        }

        if(setArray.length === 0)
            return;



        setArray.sort().reverse();
        // console.log("sort 완료 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ")
        // console.log(setArray);
        // console.log(localStorage.getItem(setArray[0]))


        for(let i=0 ; i<setArray.length ;i++){
            array.push(localStorage.getItem(setArray[i]));
            data[i] = array[i].split(",")
        }

        
        
    }


    return (
        <>
            <div> 

            {
               //window.localStorage.clear()
            }

            { 
                //localStorage.length !== 0 && <LocalContents placeId={placeId} reviewType ="S" reviewData={reviewData} />
            }

            {/* {reviewData.shortReview.map((data,i) => (

                <ShortContents
                userId={data.userId}
                userName={data.userName}
                userURL={data.userURL}
                shortContents={data.shortContents}
                time={data.time}
                />

            )) }  */}
            {
                checkLocal(localStorage)
            }

            {
                //console.log("============================")
            }

            {
                data.map((d, i)=>{ 

                    console.log("================")
                    console.log(setArray.length)

                        if(i===3)
                            return;     

                        return <ShortContents
                        userName={d[1]}
                        userImg={d[2]}
                        shortContents={d[4]}
                        time = {setArray[i].substr(0,15)}
                        /> 
                })

            }

            {
                setArray.length<3 ? 
                    reviewData.shortReview.map((data,i) => {

                        console.log(setArray.length)
                        

                        if(i < 3 - setArray.length) {
                            console.log("afdsfdsafdsdafsafdsfads")
                            console.log(i)
                            return <ShortContents
                            userId={data.userId}
                            userName={userData[data.userId].userName}
                            userImg={userData[data.userId].userImg}
                            shortContents={data.shortContents}
                            time={data.time}
                            />
                        }
                        
            
                    }) :
                    console.log("저장개수가 3이상")

            }
                
            </div>
     
        </>
    );
}