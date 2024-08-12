import arrowVector from "../assets/arrow.svg";
import refreshVector from "../assets/refresh.svg";

export const Bar = () => {
  return (
    <div className="flex">
      <div>
        <img className="pt-[27px] pl-[21px]" src={arrowVector} alt="" />
      </div>
      <div className="font-dmserif font-[400] text-[16px] leading-[21.94px] text-[#000000B2] pt-[21px] pl-[84px]">
        Profile Overview
      </div>
      <div className="pt-[19px] pl-[78px]">
        <div className="w-[24px] h-[24px]">
          <img className="w-[15.99px] h-[16px]" src={refreshVector} alt="" />
        </div>
      </div>
    </div>
  );
};
