import React from "react"; 

import ShortContents from "./ShortContents";
//import LocalContents from "../LocalContents";
import userData from "../../userData.json"

import styles from "../scroll.module.css";



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
        
        for(let i=0;i<localStorage.length;i++){
            if(localStorage.key(i)[16] === placeId.toString() && localStorage.key(i)[18]=== reviewType)
                setArray.push(localStorage.key(i));
        }

        if(setArray.length === 0)
            return;



        setArray.sort().reverse();


        for(let i=0 ; i<setArray.length ;i++){
            array.push(localStorage.getItem(setArray[i]));
            data[i] = array[i].split(",")
        }

        
        
    }


    return (
        <>
            <div className={styles.scroll_short}> 

            {
                checkLocal(localStorage)
            }

            {
                data.map((d, i)=>{ 

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
                
                    reviewData.shortReview.map((data,i) => {
                        
                            return <ShortContents
                            userId={data.userId}
                            userName={userData[data.userId].userName}
                            userImg={userData[data.userId].userImg}
                            shortContents={data.shortContents}
                            time={data.time}
                            />
            
                    }) 

            }
            </div>
     
        </>
    );
}