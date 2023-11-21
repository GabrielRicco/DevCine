import React from "react";
interface MoviceCineProps{
    name: string,
    image: string,
    category: string,
}


const MovieCine = ({name,image,category}:MoviceCineProps): React.ReactElement =>{
    
    return(
        <>
        
           <h2>{name}</h2>
            {image && <img src={image }/>}
            <p>{category}</p>
        </>
    )
}
export {MovieCine}