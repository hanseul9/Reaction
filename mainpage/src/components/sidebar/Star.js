import { FaStar } from "react-icons/fa";

export default function Star(selected){
  
    return(
        <>
        {
            console.log(selected.selected)
        }
            <FaStar color={selected.selected ? "red" : "grey"} />
    
        </>
    )
    
    
    
    
}