import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
  const { imageSearch } = useContext(Context);
  const [result, setResult] = useState([]);
  const { query, startIndex } = useParams();
  useEffect(() => {
    fetchSearchResult();
  }, [query, startIndex, imageSearch]);

  const fetchSearchResult = () => {
    let payload = { q: query, index: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };
  const { items, queries } = result;

  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] ml-[130px] md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#70757a] mb-3">
          About {result?.searchInformation?.formattedTotalResults} results (
          {result?.searchInformation?.formattedSearchTime} seconds){" "}
        </div>
        {!imageSearch ? (
          <>
            {items?.map((item, idx) => (
              <SearchedItemTemplate key={idx} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
            {items?.map((item, idx) => (
              // <SearchedImageItemTemplate key={idx} data={item} />
              <span>Image</span>
            ))}
          </div>
        )}
        <Pagination queries={queries}/>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResult;
