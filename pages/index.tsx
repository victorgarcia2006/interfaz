import Image from "next/image";
import { Inter } from "next/font/google";
import { TourCard } from "@/components/TourCard";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-[32px] flex">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-[120px] text-[#fff]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <h1 className="text-white text-5xl py-[20px] font-bold text-[40px]">
          Latest <br /> News
        </h1>

        <p className="text-[#7751f2] text-[16px]">
          Covering March <br /> & April 2015
        </p>
      </div>

      <TourCard
        header="NEWS"
        imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSML9VA_udvq4QCFBoy49KFt3iEMrn0vm_tjQJp_ZLzIdS_3dOd"
        date="March 20 2015"
        title1="What happened"
        title2="in Thailand?"
        parrafo1="Kayaks crowd Three Sisters Springs,"
        parrafo2="where people and manatees maintain"
        parrafo3="controversial coexistence."
        information="Find out more"
        flecha=""
      />

      <TourCard
        header="EVENT"
        imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCn4qVy86Ks1Nu_kSDN9ZECBpDqHzcoiUsVI5bz_FbEOOEUIN"
        date="April 31 2015 "
        title1="The funkiest"
        title2="Medusas"
        parrafo1="Eah day five million jellyfish glide across"
        parrafo2="the surface of Palau´s Jellyfish Lake to "
        parrafo3="follow the sun-streaming."
        information="Find out more"
        flecha=""
      />
    </main>
  );
}
