/* color-org/src/components/StarRating.js */
import React from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";


export default function StarRating(starRating){
  
    const arr = [1,2,3,4,5]
    const num = starRating.starRating

    function star(){
        for(let i=0;i<5;i++){
            return <Star selected={num < i}/>
        }
            
        console.log("Starrrrrrrrrrrrrrrrrrrrrrr")
    }


    return(
        <>
        
        {
            console.log("+++++++++")
        }
        {
            console.log(num)
        }
        
        <div>
            {
                arr.map((n,i)=>{
                    //return console.log(i)
                    return <Star selected={num > i}/>
                })
            }
            </div>
            {/* {
                star()
            }
            {
                star()
            }
            {
                star()
            }
            {
                star()
            }
            {
                star()
            } */}
        </>
    )
    
}
