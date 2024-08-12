import { Bar } from "./Bar";
import { ImageWithName } from "./ImageWithName";

export const Card = () => {
  return (
    <div className="w-[358px] h-[610px] top-[111px] left-[461px] rounded-[12px] border-[8px] bg-custompink">
      <Bar />
      <ImageWithName />
    </div>
  );
};
