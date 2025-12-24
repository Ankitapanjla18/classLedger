import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OfflineFirst from "@/components/OfflineFirst";
import HybridReady from "@/components/HybridReady";
import TeacherFirst from "@/components/TeacherFirst";
import ParentCommunication from "@/components/ParentCommunication";
import WhyChoose from "@/components/WhyChoose";
import WhoIsItFor from "@/components/WhoIsItFor";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <Hero />
        <About />
        <OfflineFirst />
        <HybridReady />
        <TeacherFirst />
        <ParentCommunication />
        <WhyChoose />
        <WhoIsItFor />
        <ClosingCTA />
        <Footer />
      </main>
    </>
  );
}

