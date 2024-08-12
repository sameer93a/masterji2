import profileImage from "../assets/profileimage.svg";
import { LC } from "./LC";
import { Line } from "./Line";

export const ImageWithName = () => {
  return (
    <div>
      <div className="pt-[71px] pl-[218px]">
        <div className="w-[22px] h-[15px] rounded-[12px] bg-black ">
          <div className="font-dmserif font-[400] text-[8px] text-white text-center pt-[2px]">
            Mr
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-[100px] h-[100px] rounded-[64px] shadow-sm"
          src={profileImage}
          alt=""
        />
      </div>
      <div className="font-donegalone font-[400] text-[24px] flex justify-center ">
        Tom Garza
      </div>
      <div className="font-dmsans font-[400] text-[12px] flex justify-center ">
        beautifulkoala355
      </div>
      <Line />
      <LC />
    </div>
  );
};
