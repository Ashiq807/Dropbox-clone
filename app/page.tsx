"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

import dropbox from "../assets/dropbox-logo-icon-4.png";
import framwork from "../assets/9608835.png";
import wave from "../assets/wave-icon-vector-18.png";
import typography from "../assets/2303451.png";
import iconography from "../assets/yellow-lock-icon-1.png";
import color from "../assets/color-wheel-icon-png-0.jpg";
import img from "../assets/purepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png";
import animation from "../assets/3938603.png";

export default function Home() {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const router = useRouter();

  const { scrollYProgress } = useScroll();

  const centerScale = useTransform(scrollYProgress, [0, 1], [6, 1]);

  const boxTransforms = [
    {
      x: useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["-50vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["50vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["-50vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["50vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    },
  ];

  const gridMoveX = useTransform(scrollYProgress, [0, 1], ["-50vw", "0vw"]);
  const gridMoveY = useTransform(scrollYProgress, [0, 1], ["-50vh", "0vh"]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsDrawing(true), 1000);

    return () => clearTimeout(timeout);
  }, []);

  const boxes: string[][] = [
    ["col-span-3 row-span-4 bg-purple-800", "Framework"],
    ["col-span-6 row-span-3 bg-yellow-400", "Voice & Tone"],
    ["col-span-5 row-span-4 bg-cyan-500", "Logo"],
    ["col-span-3 row-span-3 bg-orange-500", "Typography"],
    ["col-span-5 row-span-4 bg-orange-600", "Color"],
    ["bg-blue-700", ""],
    ["col-span-3 row-span-4 bg-pink-400", "Motion"],
    ["col-span-3 row-span-3 bg-green-400", "Iconography"],
    ["row-span-3 col-span-6 bg-pink-800", "Imagery"],
  ];

  return (
    <>
      <div className="h-[200vh] w-full overflow-y-scroll flex items-center justify-center">
        <div className="w-[100vw] h-[100vh]">
          <svg
            className="top-0 left-0 w-full h-screen absolute"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[33.33, 66.66].map((pos, i) => (
              <motion.line
                key={`v-${i}`}
                x1={pos}
                y1={"0"}
                x2={pos}
                y2={"100"}
                stroke={"blue"}
                strokeWidth={"0.5"}
                strokeDasharray={"100"}
                strokeDashoffset={isDrawing ? "0" : "100"}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ x: gridMoveX }}
              />
            ))}

            {[33.33, 66.66].map((pos, i) => (
              <motion.line
                key={`h-${i}`}
                x1={"0"}
                y1={pos}
                x2={"100"}
                y2={pos}
                stroke={"blue"}
                strokeWidth={"0.5"}
                strokeDasharray={"100"}
                strokeDashoffset={isDrawing ? "0" : "100"}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ y: gridMoveY }}
              />
            ))}
          </svg>
        </div>
        <motion.div
          className="grid grid-cols-17 w-screen h-[100vh] grid-rows-7 gap-2 fixed top-1/2 left-1/2 -translate-x-1/2 bg-transparent -translate-y-1/2 p-3"
          style={{ transformOrigin: "center center" }}
        >
          {boxTransforms.map(({ x, y }, index) => (
            <motion.div
              onClick={() => router.push("/")}
              key={`motiondiv-${index}`}
              className={`overflow-hidden flex flex-col justify-between items-start p-2 text-3xl font-medium ${boxes[index][0]}`}
              style={{
                x,
                y,
                scale: index === 5 ? centerScale : 1,
                transformOrigin: "center center",
                cursor: "pointer",
              }}
              whileHover={{
                backgroundColor: index === 5 ? "" : "black",
                color: index === 5 ? "" : "white",
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="m-0 p-0">{boxes[index][1]}</h1>
              <Image
                src={
                  index === 5
                    ? dropbox
                    : index === 0
                    ? framwork
                    : index === 1
                    ? wave
                    : index === 2
                    ? dropbox
                    : index === 3
                    ? typography
                    : index === 7
                    ? iconography
                    : index === 4
                    ? color
                    : index === 8
                    ? img
                    : index === 6
                    ? animation
                    : dropbox
                }
                width={800}
                height={200}
                alt="logo"
                className="w-50 h-auto mx-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
