import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex p-[15px] md:px-[30px]  border-b border-[#dadce0]">
        <span className="text-[#707578] textt-[15px] leading-none">
          Vietnam
        </span>
      </div>
      <div className="flex flex-col md:flex-row py-3 md:py-0 md:px-[15px] items-center justify-between ">
        <div className="flex justify-center">
          {quickLinks?.map((link,idx) => (
            <span
              className="text-[#707578] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
              key={idx}
            >
              {link}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          {settingMenu?.map((menu,idx) => (
            <span
              className="text-[#707578] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
              key={idx}
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
