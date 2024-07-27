import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import { EXPERIENCES } from ".";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Intro />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );

  function Experience() {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="my-5 max-w-4l mx-auto py-6 text-center"
        >
          {EXPERIENCES}
        </motion.p>
      </div>
    );
  }
}
