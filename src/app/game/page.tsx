"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { getCookie } from "typescript-cookie";

export default function Game() {
  useEffect(() => {
    console.log(getCookie("enemyID"));
  }, []);

  return (
    <>
      {/* {document.cookie} */}
      <Link href="/">Вернуться на карту</Link>
    </>
  );
}
