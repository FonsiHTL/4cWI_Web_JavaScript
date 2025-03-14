import React from "react";
import { useState } from "react";

export default function Button({ title, onClick, enabled }) {
    const [isGreen, setIsGreen] = useState(enabled);
  
    return (
      <div>
        <button
          className={`border w-40 m-7 p-4 text-white font-bold ${
            isGreen ? "bg-green-400" : "bg-gray-400"
          }`}

          
          onClick={() => {
            setIsGreen(!isGreen); 
            if (onClick) onClick(); 
          }}
        >
        <div>
          {title}
        </div>

        </button>
      </div>
    );
  }