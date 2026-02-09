import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { Signs } from "@/components/layout/Signs";
import { About } from "@/components/layout/About";
import { Method } from "@/components/layout/Method";
import { Solutions } from "@/components/layout/Solutions";
import { Benefits } from "@/components/layout/Benefits";
import { HowWeWork } from "@/components/layout/HowWeWork";
import { Technologies } from "@/components/layout/Technologies";
import { Clients } from "@/components/layout/Clients";
import { Contact } from "@/components/layout/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Signs />
        <About />
        <Method />
        <Solutions />
        <Technologies />
        <Benefits />
        <HowWeWork />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
