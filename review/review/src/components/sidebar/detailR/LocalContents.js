import DetailContents from "./DetailContents";


export default function LocalContents({placeId}){

    var array= [];
    var data=[[]];

    // userId, userName, userImg, reviewTitle, reviewContents, imgURL순

    const plusData = {
        "userId" : 1,
        "userName" : "gg",
        "userImg" : "dd",
    
        "reviewTitle" : "ss",
        "reviewContents" : "aa",
        "imgURL" : "ss"
     }

     function checkLocal(localStorage){
        for(let i=0;i<localStorage.length;i++){
            if(localStorage.key(i)[0] === "0"){
                console.log("함수입니다---------------------")
                console.log(localStorage.getItem(localStorage.key(i)))
                //console.log(typeof(localStorage.getItem(localStorage.key(i))))
                array.push(localStorage.getItem(localStorage.key(i)));
                data[i] = array[i].split(",")
                
            }
        }
     }

    //  function setData(data){
    //     for(let i=0;i<data.length;i+=6){
    //         // userName, userImg, reviewTitle, reviewContents, imgURL
    //         console.log("+++++++++++++++++++++++++++++++++++++++++");
    //         return<DetailContents
    //          userName={data[i*6+1]}
    //          userImg={data[i*6+2]}
    //          reviewTitle={data[i*6+3]}
    //          reviewContents={data[i*6+4]}
    //          imgURL={data[i*6+5]}
    //         />
    //     }
    //  }
    
    function setData(){

    }

    
    //localStorage.key.filter(localData => localData[0] === placeId.toString())

    return(
            <>
              
              
                {
                    checkLocal(localStorage)
                }
                
                {
                    data.map((d, i)=>{
                        console.log("map함수입니다")
            
                            return<DetailContents 
                            userName={d[1]}
                            userImg={d[2]}
                            reviewTitle={d[3]}
                            reviewContents={d[4]}
                            imgURL={d[5]}
                            />
                        }


                        
                    )
                }
                
        
            
            </>


    );



}