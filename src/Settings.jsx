import React from 'react'
import HeaderSetting from "./assets/HeaderSetting.svg";
import { useNavigate } from 'react-router-dom';



const Settings=()=> {
  
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate("/HomePage");
    };


    return (
    <div className="flex flex-col justify-center items-center w-24 lg:w-96  bg-white p-8 m-4 border-2 border-gray-300 rounded-lg mx-auto shadow-xl transition-transform hover:scale-110">
      <div className="flex gap-2 items-center">
      <img src={HeaderSetting} alt="Setting svg" /> 
      <h1 className="text-4xl text-blue-600 font-bold">Settings</h1>
      
      </div>
      <div className="text-2xl font-bold mt-6 ">
      <h1>Select Nationality</h1>
      </div>
      <div className="flex flex-col mt-4 ">
        <div className="flex items-center space-x-2 ">
            <input type="checkbox" className="w-5 h-5 hover:ring-blue-600 hover:ring-rounded-lg transition transform hover hover:scale-110 text-blue-600 "></input>
            <label className="text-xl">CH</label>
        </div>
        <div className="flex items-center space-x-2 mt-4 ">
            <input type="checkbox" className="w-5 h-5 transition transform hover hover:scale-110 text-blue-600 "></input>
            <label className="text-xl">ES</label>
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <input type="checkbox" className="w-5 h-5 transition transform hover hover:scale-110 text-blue-600 "></input>
            <label className="text-xl">FR</label>
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <input type="checkbox" className="w-5 h-5 transition transform hover hover:scale-110 text-blue-600 "></input>
            <label className="text-xl">GB</label>
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <input type="checkbox" className="w-5 h-5 transition transform hover hover:scale-110 text-blue-600 "></input>
            <label className="text-xl">US</label>
        </div>
       
      
    
      </div>
      
            <button type="submit" onClick={handleClick}  className="bg-blue-600  text-xl text-white font-bold rounded-xl px-3 py-2 lg:px-8 lg:py-4 m-10 hover:bg-blue-950">HomePage</button>
        
    </div>
  )
}

export default Settings;