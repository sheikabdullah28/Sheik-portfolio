import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Hero from "@/components/Hero/Hero";
import Experience from "@/components/Experience/Experience";
import Certifications from "@/components/Certifications/Certifications";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Stats from "@/components/Stats/Stats";
import CustomCursor from "@/components/Cursor/CustomCursor";
import ScrollReveal from "@/components/Animations/ScrollReveal";
import Loader from "@/components/Loader/Loader";
import MagneticButton from "@/components/Common/MagneticButton";

export default function Home() {
  return (
    <>
      <Loader />

      <CustomCursor />

      <Navbar />

      <Hero />

      <ScrollReveal>
        <Stats />
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      <ScrollReveal>
        <Certifications />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />

    </>
  );
}