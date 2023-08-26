import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MainNav from "@/components/main-nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainNav title="Analizador léxico" />
      <Hero />
      <Footer author="Thomas Restrepo Orrego" />
    </main>
  );
}
