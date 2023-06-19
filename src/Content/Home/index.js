import './index.scss'
import Lander from './lander'
import About from '../About'
import Experience from '../Experience'
import Projects from '../Projects'
import Contact from '../Contact'


const Home = () => {
  return(
    <div className="home">
      <Lander />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home