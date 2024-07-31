import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Step from './Components/Steps/Step'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Feedback from './Components/Feecback/Feedback'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Step />
      <Services />
      <About />
      <Team />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  )
}

export default App