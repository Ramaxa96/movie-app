import './SectionSelection.scss'

import SliderButtonNext from '../SliderButton/SliderButtonNext'
import SliderButtonPrev from '../SliderButton/SliderButtonPrev'
import SelectionCard from './SelectionCard'

import useSlider from '@/hooks/useSlider'
import { useState } from 'react'

const SectionSelection = () => {
   const [firstSelectionCard, setFirstSelectionCard] = useState(1)
   const {nextCard, prevCard} = useSlider(firstSelectionCard, 4, setFirstSelectionCard, 4)

   return (
      <section className="selection">
         <h2 className="selection__title">Подборки фильмов</h2>
         <div className="selection__slider">
            {firstSelectionCard > 1 && <SliderButtonPrev className="selection__button-prev" handleClick={prevCard}/>}
            <div className="selection__offers">
               <SelectionCard />
               <SelectionCard />
               <SelectionCard />
               <SelectionCard />
            </div>
            <SliderButtonNext className="selection__button-next" handleClick={nextCard}/>
         </div>
      </section>
   )
}

export default SectionSelection