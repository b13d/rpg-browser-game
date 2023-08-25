import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface PropsStatsPlayer {
  winProps: number;
  loseProps: number;
  totalGold: number;
  currentGold: number;
}

export default function StatsPlayer({
  winProps,
  loseProps,
  totalGold,
  currentGold,
}: PropsStatsPlayer) {
  return (
    <div className="w-[300px] absolute right-0">
      <p className={`${inter.className} text-slate-50 text-[1.5rem]`}>
        Статистика игрока
      </p>
      <h1 className={`${inter.className} text-slate-50 text-[1.5rem]`}>
        Win:{winProps}
      </h1>
      <h1 className={`${inter.className} text-slate-50 text-[1.5rem]`}>
        Lose:{loseProps}
      </h1>
      <h1 className={`${inter.className} text-slate-50 text-[1.5rem]`}>
        Total gold:{totalGold}
      </h1>
      <h1 className={`${inter.className} text-slate-50 text-[1.5rem]`}>
        Current gold: {currentGold}
      </h1>
    </div>
  );
}
