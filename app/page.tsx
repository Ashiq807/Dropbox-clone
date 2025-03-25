"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import dropbox from "../assets/dropbox-logo-icon-4.png";
import { image } from "framer-motion/client";

export default function Home() {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();

  const centerScale = useTransform(scrollYProgress, [0, 1], [6, 1]);

  const boxTransforms = [
    {
      x: useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]),
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
    ["col-span-3 row-span-4 bg-purple-800"],
    ["col-span-6 row-span-3 bg-yellow-400"],
    ["col-span-5 row-span-4 bg-cyan-500"],
    ["col-span-3 row-span-3 bg-orange-500"],
    ["col-span-5 row-span-4 bg-orange-600"],
    ["bg-blue-700", dropbox.src],
    ["col-span-3 row-span-4 bg-pink-400"],
    ["col-span-3 row-span-3 bg-green-400"],
    ["row-span-3 col-span-6 bg-pink-800"],
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
              key={index}
              className={` text-white p-6 flex items-center justify-center ${boxes[index][0]}`}
              style={{
                x,
                y,
                scale: index === 5 ? centerScale : 1,
                transformOrigin: "center center",
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image src={dropbox} alt="logo" fill />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
