 
import Decenterlized from "@/components/decenterlize/page";
import DecenterlizeImg from "@/components/decenterlizeImg";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import TokenList from "@/components/tokenSwiper";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TokenList/>
      <DecenterlizeImg/>
      <Decenterlized/>
    </div>
  );
}
