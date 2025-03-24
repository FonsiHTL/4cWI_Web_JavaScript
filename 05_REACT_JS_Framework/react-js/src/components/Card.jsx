import React from "react";


export default function Card({ name, title, imageUri }) {
    const random = Math.random();
    const image = imageUri + "?time=" + random;
    console.log(image);


    return (
        <div className="border h-80 bg-blue-200 shadow-lg shadow-black">
            <div className="p-4 h-2/6">
                <h2 className="font-bold text-xl">{name}</h2>
                <h4>{title}</h4>
            </div>
            <div className="bg-green-400 h-4/6">
                <img src={image} className="w-full h-full object-cover" />
            </div>
        </div>
    )
}