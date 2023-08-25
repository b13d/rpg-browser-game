import Image from "next/image";
import Circle from "@/components/Circle";
import Map from "@/components/Map";
import { Container } from "@mui/material";
import StatsPlayer from "@/components/StatsPlayer";

export default function Home() {

  return (
    <Container className="overflow-hidden" maxWidth="xl">
      {/* изменить данные на динамические */}
      <StatsPlayer currentGold={0} loseProps={0} totalGold={0} winProps={0}/>
      <Map />
    </Container>
  );
}
