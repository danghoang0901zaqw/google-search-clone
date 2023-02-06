import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const {query,startIndex}=useParams()
  const navigate=useNavigate()

  const [searchQuery, setSearchQuery] = useState(query || "");
  const inputRef = useRef();

  const handleSearchQuery=(e)=>{

    if(e.key==='Enter' && searchQuery.length>0){
      navigate(`/${searchQuery}/${1}`)
    }
  }

  const handleClear = () => {
    setSearchQuery("");
    inputRef.current.focus()
  };
  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center justify-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0 "
    >
      <AiOutlineSearch size={18} color="9aa0a6" />
      <input
        ref={inputRef}
        className="outline-0 grow text-black/[0.87]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleSearchQuery}
        type="text"
        autoFocus
      />
      <div className="flex items-center gap-3 ">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={handleClear}
          />
        )}
        <img className="w-6 h-6 cursor-pointer " src={MicIcon} alt="" />
        <img className="w-6 h-6 cursor-pointer " src={ImageIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchInput;
