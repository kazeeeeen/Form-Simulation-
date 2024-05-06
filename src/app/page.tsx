import BodySection from "./components/BodySection";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  px-12 py-8 bg-slate-300 container mx-auto">
      <HeroSection />
      <BodySection />
    </main>
  );
}

