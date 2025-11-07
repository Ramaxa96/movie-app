import './App.scss'

import SectionRecommendation from './components/SectionRecommendation/SectionRecommendation'
import Header from "./components/Header/Header"
import SectionHero from './components/SectionHero/SectionHero'
import SectionSelection from './components/SectionSelection/SectionSelection'

const App = () => {
  return (
    <>
      <Header />  
      <SectionHero />
      <SectionSelection />
      <SectionRecommendation />
    </>
  )
}

export default App