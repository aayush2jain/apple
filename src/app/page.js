import Image from "next/image";
import Explore from "@/components/Explore";
import Homepage from "@/components/Homepage";
import VideoCarousel from "@/components/VideoCarousel";
import Zoom from "@/components/Zoom";
export default function Home() {
  return (
   <>
   <Homepage></Homepage>
   <VideoCarousel></VideoCarousel>
   <Zoom></Zoom>
   <Explore></Explore>
   </>
  );
}
