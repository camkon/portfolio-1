import './index.scss'
import Lander from './lander'
import About from '../About'
import History from '../History'
import Projects from '../Work'
import Contact from '../Contact'


const Home = () => {
  return(
    <div className="home">
      <Lander />
      <About />
      <History />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home