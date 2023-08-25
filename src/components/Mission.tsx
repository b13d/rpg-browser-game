import React, { useEffect, useState } from "react";
import apiMission from "../api/missionApi.json";
import { Typography, Button, ButtonGroup } from "@mui/material";
import { Inter } from "next/font/google";
import Game from "@/app/game/page";
import Link from "next/link";
import { setCookie } from "typescript-cookie";

const inter = Inter({ subsets: ["latin"] });

interface PropsMission {
  missionID: number;
  setShowMissionInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Mission({
  missionID,
  setShowMissionInfo,
}: PropsMission) {
  const currentMission = apiMission.find((mission) => mission.id === missionID);
  const [showGameField, setShowGameField] = useState(false);

  useEffect(() => {
    setCookie("enemyID", missionID);
  }, [])

  // console.log(document.cookie);

  return (
    <>
      <Typography className={inter.className}>
        Номер задания: {currentMission?.id}
      </Typography>
      <Typography className={inter.className}>
        Название задания: {currentMission?.title}
      </Typography>
      <Typography className={inter.className}>
        Тип врага: {currentMission?.target}
      </Typography>
      <Typography className={inter.className}>
        Награда: {currentMission?.reward}
      </Typography>
      <div className=" flex flex-col items-center gap-2">
        <Link className="w-full" href="/game">
          <button
            className={`${inter.className} w-full rounded-none outline-none py-2 border  border-[#ff00007e] text-[white] hover:bg-[#ff0000ad] hover:border-transparent`}
          >
            Сразиться
          </button>
        </Link>
        <button
          onClick={() => setShowMissionInfo(false)}
          className={`w-full rounded-none outline-none  text-[white] py-2 border border-[#09ff007e] hover:bg-[#09ff0096] hover:border-transparent ${inter.className}`}
        >
          Отмена
        </button>
      </div>
    </>
  );
}
