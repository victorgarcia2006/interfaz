import Image from "next/image";

interface TourCardProps {
  title1: string;
  title2: string;
  imageURL: string;
  date: string;
  parrafo1: string;
  parrafo2: string;
  parrafo3: string;
  header: string;
  flecha: string;
  information: string;
}

export const TourCard = (props: TourCardProps) => {
  return (
    <div className="w-[240px] h-[420px] bg-white mt-[60px] ml-[40px] items-center">
      <div className="w-[240px] h-[160px]">
        <img
          src={props.imageURL}
          alt=""
          className=" w-[240px] h-[160px] object-cover absolute z-0"
        />
        <p className="pl-[16px] pt-[16px] font-bold text-[12px] text-white relative z-100 tracking-wider">
          {props.header}
        </p>
      </div>
      <div className="pt-[16px] pl-[16px]">
        <div className="text-[#909092] text-[8px] font-extrabold relative z-0">
          {props.date}
        </div>
        <div className="font-bold text-[20px] pt-[12px] leading-[26px] tt">
          {props.title1}
          <br></br>
          {props.title2}
        </div>
        <p className="text-[9px] pt-[12px] font-bold leading-[16px] tracking-wide">
          {props.parrafo1}
          <br></br>
          {props.parrafo2}
          <br></br>
          {props.parrafo3}
        </p>
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
