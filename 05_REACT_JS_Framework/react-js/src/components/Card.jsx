import React from "react";


export default function Card({name, title, imageUri}) {
    const random = Math.random();
    
    return (
        <div className="border grid-cols-2 h-100 m-7 shadow-2xl shadow-black bg-blue-200">
            <div className="p-4">
                <h2 className="font-bold text-xl">{name}</h2>
                <h4>{title }</h4>
            </div>
            <div>
                <img src={imageUri + "?random=" + random} alt="nicht hier" className="object-cover w-full h-full"/>
            </div>
        </div>
    )
}