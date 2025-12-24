import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar"; // <--- We will create this next

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar /> {/* <--- Add the Navbar at the very top */}
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="videos">
        <Videos />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}