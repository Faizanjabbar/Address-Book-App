import React from "react";
import email from "./assets/Email.svg";

export const UserCard = (props) => {
   
    console.log(props.data);
   
    return (
        <div className="flex flex-col items-center border shadow-lg bg-white rounded-xl hover:scale-105">
         <img className="rounded-full w-40 h-40" src={props.data.picture.large} alt="profile" />
            <h3 className="text-2xl font-bold mt-4">{props.data.name.first}{" "}{props.data.name.last}</h3>
    
            
    
            <p className="flex text-xl font-bold"><img src={email} alt="Setting svg" />{props.data.email}</p>
        </div>
    )
}

