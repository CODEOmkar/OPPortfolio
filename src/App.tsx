import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-10" />
      
      <div className="absolute top-0 left-0 w-full z-50 pr-5 pl-5">
        <Navbar />
      </div>

      <div className="w-full relative z-10 pr-5 pl-5 pt-5 pb-5">
        <Home />
      </div>

      <div>
        <About/>
      </div>

      <div>
        <Skills/>
      </div>

      <div>
        <Projects/>
      </div>

      <div>
        <Contact/>
      </div>
    </div>
  )
}

export default App