import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import For from "@/components/For";

export default function Home() {
  return (
      <>
        <Header/>
          <About/>
          <For/>
        <Hero/>

      </>
  );
}