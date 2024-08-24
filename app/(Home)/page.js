import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Notifications from "@/components/Notifications";

export default function Home() {
  return (
    <section>
      <Hero />
      <Notifications />
      <About />
      <Gallery />
    </section>
  );
}
