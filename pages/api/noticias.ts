import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: 1,
      imageUrl: "https://picsum.photos/1280/720",
      type: "Article",
      date: new Date(),
      title: "Nature is so beautiful",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquet fermentum, lorem nisi aliquam diam, vitae pulvinar elit nunc eget loum, lorem nisi aliquam diam, vitae pulvinar elit nunc eget lorem.",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/1280/720",
      type: "Blog",
      date: new Date(),
      title: "Sunset in the mountains",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquet fermentum, lorem nisi aliquam diam, vitae pulvinar elit nunc eget lorem. Donec euismod, nisl sed aliquet fermentum, lorem nisi aliquam diam, vitae pulvinar elit nunc eget lorem.",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/1280/720",
      type: "Article",
      date: new Date(),
      title: "The best food in the world",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquet fermentum, lorem nisi aliquam diam, vitae pulvinar elit nunc eget lom, lorem nisi aliquam diam, vitae pulvinar elit nunc eget lorem.",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/1280/720",
      type: "Blog",
      date: new Date(),
      title: "Oceans' life",
      description:
        "Lorem ipsum dolor sit amet, consectetur sed aliquet fermentum, lorem nisi aliquam diam, vitae pulvinar elit nunc eget lorem. Donec euismod, nisl sed aliquet fermentum, lorem nisi aliquam diam, vitae pulvinar elit nunc eget lorem.",
    },
  ]);
}