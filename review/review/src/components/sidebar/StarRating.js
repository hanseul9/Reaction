/* color-org/src/components/StarRating.js */
import React from "react";
import Star from "./Star";
import { FaStar } from "react-icons/fa";

const createArray = length => [...Array(length)];

export default function StarRating({starRating = -1, length = -1}){
    console.log(starRating);
    console.log(length);  

    return (

        <>           
             {createArray(length).map( (n, i) => (
                <Star selected = {starRating > i} />        
               )) }
        </>

    );
}

