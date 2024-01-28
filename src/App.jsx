import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Nav from './components/Nav'
import TopMain from './components/TopMain'
import {Main} from './components/Main'
import Job from './components/Job'

function App() {

  return (
    <div className="font-['Ubuntu']">
  <Header />
  <Nav />
  <Carousel />
  <TopMain />
  <Main />
  <Job />
  <Footer />
  
    </div>
  )
}

export default App
