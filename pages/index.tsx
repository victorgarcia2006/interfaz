import Image from "next/image";
import { Inter } from "next/font/google";
import { TourCard } from "@/components/TourCard";
import { useEffect, useState } from "react";
import { useFetchNoticias } from "@/hooks/noticias";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { noticias, refetch } = useFetchNoticias();

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

      {noticias && noticias.map((noticias, index) => {
        return <TourCard key={index}
        header={noticias.type}
        imageUrl={noticias.imageUrl}
        date={noticias.date}
        title1={noticias.title}
        parrafo1={noticias.description}
        information="Find out more"
        flecha=""
      />
      })}
    
    </main>
  );
}

