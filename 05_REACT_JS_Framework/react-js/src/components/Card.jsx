import React from "react";


export default function Card({image, name, jobtitle, description}) {
    
    return <div className="border w-499px m-20 shadow-lg">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="bild nicht verfügbar" />
        <p className="font-bold ml-3 mb-1 text-xl">{name}</p>
        <p className="font-bold ml-3 mb-1 text-xl">{jobtitle}</p>
        <p className="font-bold ml-3 mb-1 text-xl">{description}</p>
        
        
        </div>
}