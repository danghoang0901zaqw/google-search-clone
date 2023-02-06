import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { imageSearch, setImageSearch } = useContext(Context);

  useEffect(()=>{
      return ()=>setImageSearch(false)
  },[])

  const handleClick = (item) => {
    setSelectedMenu(item.name);
    setImageSearch(item.name==='Images')
  };
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt7 border-b border-[#ebebeb] flex flex-col items-center sticky t-0 bg-whitte md:block ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow  ">
          <Link to="/">
            <img className="hidden md:block w-[92px] mr-10" src={Logo} alt="" />
          </Link>
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[120px] mt-3">
        {menu?.map((item, idx) => (
          <span
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
              selectedMenu === item.name ? "text-[#1a73e8]" : ""
            }`}
            key={idx}
            onClick={() => handleClick(item)}
          >
            <span className="hidden md:block mr-2">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
            {selectedMenu === item.name && (
              <span className="absolute h-[3px] w-[calc(100%-20px)]  bottom-0 left-[10px] bg-[#1a73e8] "></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
