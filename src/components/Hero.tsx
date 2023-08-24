'use client'

import React from "react";
import Circle from "./Circle";

export default function Hero() {
  const handleClickShowHero = () => {
    alert("Инфа о герое");
  };

  return (
    <div
      onClick={() => handleClickShowHero()}
      className="h-[70px] cursor-pointer hover:scale-125 duration-100 border-2 border-[white]"
    >
    </div>
  );
}
