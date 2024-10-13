import Image from "next/image";
import HeroSection from "@/components/Hero";
import AboutMe from "@/components/About";
import Timeline from "@/components/Journey";
import PortfolioProj from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutMe /></div>
      <div id="timeline"><Timeline /></div>
      <div id="portfolio"><PortfolioProj /></div>
      <Footer />
    </div>
  );
}
