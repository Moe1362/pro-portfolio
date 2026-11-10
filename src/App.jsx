import About from "./components/About"
import BlurBackground from "./components/BlurBackground"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto
      relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contacts />
      </main>
    </>
  )
}

export default App
