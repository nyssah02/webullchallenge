import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SectionFive from './components/SectionFive'
import SectionFour from './components/SectionFour'
import SectionOne from './components/SectionOne'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  )
}

export default App
