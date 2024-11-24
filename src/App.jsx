import Hero from "./components/Hero"
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Story from "./components/Story";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default App