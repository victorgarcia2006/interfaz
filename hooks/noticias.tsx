import { useEffect, useState } from "react";

const urlNoticia = 'http://localhost:3000/api/noticias'

export function useFetchNoticias () {
  const [noticias, setNoticias] = useState<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    type: string;
  }[]>([]);
  

  const refetch = () => {
    fetch(urlNoticia)
    .then((response) => response.json())
    .then((data) => {
      setNoticias(data);
    });
  };

  useEffect (() => {
    refetch();
  }, []);

  return { noticias, refetch };
  
}