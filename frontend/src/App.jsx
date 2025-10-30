import './App.scss'

import SectionRecommendation from './components/SectionRecommendation/SectionRecommendation'
import Header from "./components/Header/Header"
import SectionHero from './components/SectionHero/SectionHero'

const App = () => {
  return (
    <>
      <Header />  
      <SectionHero />
      <SectionRecommendation />
    </>
  )
}

export default App