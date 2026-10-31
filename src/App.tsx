import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Activity from "./components/Activity";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="stars" aria-hidden="true" />
      <Nav />
      <main id="top" className="mx-auto max-w-2xl px-4 sm:px-6">
        <Intro />
        <Projects />
        <Activity />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
