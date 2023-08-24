import Image from "next/image";
import Circle from "@/components/Circle";
import Map from "@/components/Map";
import { Container } from "@mui/material";


export default function Home() {
  return (
    <Container className="overflow-hidden" maxWidth="xl">
      <Map />
    </Container>
  );
}
