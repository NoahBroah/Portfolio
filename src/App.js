import { useContext } from 'react'
import Particle from "./components/Particle"
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
// import Hobbies from './components/Hobbies/Hobbies'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Particle />
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        {/* <Hobbies /> */}
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
  
    </div>
  )
}

export default App
