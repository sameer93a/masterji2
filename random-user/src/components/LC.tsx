import locationImage from "../assets/location.svg";

export const LC = () => {
  return (
    <div className="flex">
      <div className="w-[22px] h-[22px] bg-[#000000] rounded-full">
        <div className="flex justify-center pt-[3.5px]">
          <img src={locationImage} alt="" />
        </div>
      </div>
      <div className="font-dmsans font-[500] text-[9px] text-[#000000B2] pl-5px">
        Location
      </div>
    </div>
  );
};
