const SearchedItemTemplate = ({ data }) => {
  const createMarkup = (html) => {
    return { __html: html };
  };
  return (
    <div className="flex flex-col py-3 max-w-[720px]">
      <div className="group cursor-pointer">
        <div
          className="text-sm truncate text-[#202124]"
          onClick={() => window.open(data.link)}
        >
          {data.formattedUrl}
        </div>
        <div
          className="text-[#1a0dab] text-xl pt-2 group-hover:underline"
          onClick={() => window.open(data.link)}
        >
          {data.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] leading-6 pt-1"
        dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
      ></div>
    </div>
  );
};

export default SearchedItemTemplate;
