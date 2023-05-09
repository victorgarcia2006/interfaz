import Image from "next/image";
import { Inter } from "next/font/google";

interface TourCardProps {
  title1: string;
  imageUrl: string;
  date: string;
  parrafo1: string;
  header: string;
  flecha: string;
  information: string;
}

export const TourCard = (props: TourCardProps) => {
  return (
    <div className="w-[240px] h-[420px] flex flex-col bg-white mt-[60px] ml-[40px] items-center ">
      <div className="w-[240px] h-[160px] relative">
        <img
          src={props.imageUrl}
          alt=""
          className=" w-[240px] h-[160px] object-cover relative z-0"
        />
        <p className="pl-[16px] pt-[16px] font-bold text-[12px] text-white absolute z-10 top-0 tracking-wider">
          {props.header}
        </p>
      </div>
      <div className="pt-[16px] pl-[16px] flex flex-col justify-between h-full">
        <div>
          <div className="text-[#909092] text-[8px] font-extrabold relative z-0">
            {props.date}
          </div>
          <div className="font-bold text-[20px] pt-[12px] leading-[26px] tt">
            {props.title1}
          </div>
          <p className="text-[9px] pt-[12px] font-bold leading-[16px] tracking-wide max-h-16 text-ellipsis overflow-hidden">
            {props.parrafo1}
          </p>
        </div>

        <div className="flex font-bold text-[#5740ba] text-[12px] items-center pt-[64px] pb-[16px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 border-[3px] rounded-full border-[#5740ba] mr-[8px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
            {props.flecha}
          </svg>
          <div>{props.information}</div>
        </div>
      </div>
    </div>
  );
};
