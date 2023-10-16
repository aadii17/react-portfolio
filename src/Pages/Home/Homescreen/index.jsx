import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
    <div className="bg">
    <HeroSection />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </div>
    </>
  );
}
