import DetailContents from "./detailR/DetailContents";
import ShortContents from "./shortR/ShortContents";


export default function LocalContents({placeId, reviewType}){

    var setArray = [];
    var array= [];
    var data=[];

    // userId, userName, userImg, reviewTitle, reviewContents, imgURL순

     function checkLocal(localStorage){

        //            00R<< placeId userId reviewType
        //            index   16      17      18
        //key값 : 0월.날짜/ 시간:0분:0초 00R 이런 형태
        
        console.log( reviewType)
       
        

        for(let i=0;i<localStorage.length;i++){
            if(localStorage.key(i)[16] === placeId.toString() && localStorage.key(i)[18]=== reviewType)
                setArray.push(localStorage.key(i));
        }

        if(setArray.length === 0)
            return;



        setArray.sort().reverse();
        console.log("sort 완료 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ")
        console.log(setArray);


        for(let i=0 ; i<setArray.length ;i++){
            array.push(localStorage.getItem(setArray[i]));
            data[i] = array[i].split(",")
        }
        
    }


    return(
            <>
              
              
                {
                    checkLocal(localStorage)            
                }
                
                {
                    reviewType === "R" ? 
                    data.map((d, i)=>{
                            return<DetailContents 
                            userName={d[1]}
                            userImg={d[2]}
                            reviewTitle={d[3]}
                            reviewContents={d[4]}
                            imgURL={d[5]}
                            />
                        }
                    )
                    : //review Type === S
                    console.log("Test")
                }
                
            </>


    );



}