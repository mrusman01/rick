 
import Decenterlized from "@/components/decenterlize/page";
import DecenterlizeImg from "@/components/decenterlizeImg";
import Header from "@/components/header/header";
import HeroSection from "@/components/herosection/page";
import TokenList from "@/components/tokensList/page";

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
