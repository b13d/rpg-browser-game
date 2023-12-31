"use client";

import React, { useState } from "react";
import Mission from "./Mission";
import { Cinzel } from "next/font/google";
import { Container, Box, Typography, Button } from "@mui/material";
import Circle from "./Circle";
import ClearIcon from "@mui/icons-material/Clear";
import { motion } from "framer-motion";

const cinzel = Cinzel({ subsets: ["latin"], weight: "800" });

export default function Map() {
  const [showMissionInfo, setShowMissionInfo] = useState(false);
  const [missionID, setMissionID] = useState(0);

  const handleClickMission = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    missionIdProps: number
  ) => {
    if ((e.target as HTMLImageElement).classList.contains("avatar")) {
      setMissionID(missionIdProps);
      setShowMissionInfo(true);
    }
  };

  return (
    <>
      <section className="bg-[url('/image/background-map.jpg')] absolute bg-no-repeat flex top-0 bottom-0 right-0 left-0 justify-center items-center  bg-contain  w-[900px] h-[900px] m-auto">
        <div className="flex z-[-1]  opacity-80 top-0 left-0 fixed w-screen h-screen items-stretch justify-between">
          <img
            className="w-full"
            src="/image/background-map.jpg"
            alt="background"
          />
          <img
            className="w-full"
            src="/image/background-map.jpg"
            alt="background"
          />
        </div>
        <main className="flex  p-5 gap-5">
          <div onClick={(e) => handleClickMission(e, 0)} className="mission">
            <img
              className="mission__animation"
              src="/image/mission-boss.png"
              alt="misson"
            />
            <Circle imgUrlAvatar="enemy-1.jpg" />
            <h1 className={`${cinzel.className} mission__text`}>Mission one</h1>
          </div>
          <div onClick={(e) => handleClickMission(e, 1)} className="mission">
            <img
              className="mission__animation"
              src="/image/new-mission.png"
              alt="misson"
            />
            <Circle imgUrlAvatar="enemy-2.jpg" />
            <h1 className={`${cinzel.className} mission__text`}>Mission Two</h1>
          </div>
        </main>
      </section>
      {showMissionInfo && (
        <Box
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          key={missionID}
          component={motion.div}
          className="h-[400px] w-[250px] absolute top-[20%] flex flex-col justify-between p-5 text-amber-50 border-2 border-[#2b2929] rom-indigo-500 from-50% from-[#1d1d1d] via-[#252424] via-70% to-[#252424] to-50%  bg-gradient-to-tr"
        >
          <div
            className="flex justify-end"
            onClick={() => setShowMissionInfo(false)}
          >
            <ClearIcon color="error" className="cursor-pointer" />
          </div>
          <Mission missionID={missionID} setShowMissionInfo={setShowMissionInfo}/>
        </Box>
      )}
    </>
  );
}
