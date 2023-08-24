import React from "react";
import apiMission from "../api/missionApi.json";
import { Typography } from "@mui/material";

interface PropsMission {
  missionID: number;
}

export default function Mission({ missionID }: PropsMission) {
  const currentMission = apiMission.find((mission) => mission.id === missionID);
  return (
    <>
      <Typography>Номер задания: {currentMission?.id}</Typography>
      <Typography>Название задания: {currentMission?.title}</Typography>
      <Typography>Тип врага: {currentMission?.target}</Typography>
      <Typography>Награда: {currentMission?.reward}</Typography>
    </>
  );
}
