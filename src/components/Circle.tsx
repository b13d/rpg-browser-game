"use client";

import React from "react";

interface Props {
  imgUrlAvatar: string;
}

export default function Circle({ imgUrlAvatar }: Props) {
  const handleClick = () => {

  }
  return (
    <img
      onClick={() => handleClick()}
      src={`/image/${imgUrlAvatar}`}
      className={`avatar cursor-pointer w-12 h-12 rounded-full`}
    ></img>
  );
}
