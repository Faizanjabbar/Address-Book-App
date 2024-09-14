import React from "react";
import setting from "./assets/Setting.svg";
import search from "./assets/Search.svg";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

import { UserCard } from "./UserCard";
import { GetRandomUser } from "./api";





function HomePage() {

  const [userdata, setUserData] = useState(null);
  


  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/Settings");
  };
  useEffect(() => {
    GetRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

 




  return (
    <>
    <header>
      <div className="border-2 border-gray-200 h-[200px]">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-3xl font-bold pl-48 ">Address Book App</h1>
          <button
            type="submit"
            onClick={handleClick}
            className="flex gap-1 hover:bg-blue-950  bg-blue-600 border py-3 px-4 mr-4 text-white text-xl font-bold rounded-xl border-white "
          >
            <img src={setting} alt="Setting svg" />
            Settings
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <input
            type="text"
            placeholder="Enter Name to Search"
            className="p-2 w-1/4 text-center border-2 rounded-xl border-gray-300 text-2xl "
          />
          <button className="flex gap-1 hover:bg-blue-950 bg-blue-600 border ml-2 border-white text-white text-xl font-bold py-2 px-5 rounded-lg">
          <img src={search} alt="Setting svg" />
            Search
          </button>
        </div>
      </div>
      </header>
      <body>
        <div>
          {userdata && <UserCard data={userdata} />}
         
       
         
        </div>
      </body>
    </>
  );
}

export default HomePage;
