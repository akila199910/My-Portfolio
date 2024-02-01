
import style from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'

function App() {

  return (
    <div className={style.App}>
         <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
    </div>
  )
}

export default App
