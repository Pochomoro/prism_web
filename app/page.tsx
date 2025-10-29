
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Verified from "@/components/Verified";
import Shop from "@/components/Shop";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
          <NavBar/>
        <Header/>
          <About/>
        <Hero/>
          <Verified/>
        <Shop/>
          <Download/>
          <Footer/>
      </>
  );
}