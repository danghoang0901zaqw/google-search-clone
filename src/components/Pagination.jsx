import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({ queries }) => {
  const [page, setPage] = useState(pagination[0].startIndex);
  const { query } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const handleClickPaginaion = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };
  return (
    <div className="flex flex-col items-center py-14 max-w-[700px]">
      <div className="relattive text-[#4285f4]">
        {queries?.previousPage && (
          <div
            className="absolute left-[-30px] md:left-[-40px] top-[10px] "
            onClick={() =>
              handleClickPaginaion(queries.previousPage[0].startIndex)
            }
          >
            <FiChevronLeft size={20} className="cursor-pointer " />
            <div className="absolute cursor-pointer left-[-5px] top-[30px] hidden md:block  ">
              Prev
            </div>
          </div>
        )}
        <img src={Logo} className="w-[250px] md:w-[300px] " alt="" />
        {queries?.nextPage && (
          <div
            className="absolute right-[-30px] md:right-[-40px] top-[10px] "
            onClick={() => handleClickPaginaion(queries.nextPage[0].startIndex)}
          >
            <FiChevronRight size={20} className="cursor-pointer " />
            <div className="absolute cursor-pointer left-[-5px] top-[30px] hidden md:block  ">
              Next
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-3 text-[#4285f4]">
        {pagination?.map((p) => {
          <span
            className={`cursor-pointer ${page===p.page ? 'text-black':'text-[#4285f4]'} `}
            onClick={() => handleClickPaginaion(p.startIndex)}
            key={p.page}
          >
            {p.page}
          </span>;
        })}
      </div>
    </div>
  );
};

export default Pagination;
