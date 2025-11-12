import './SectionRecommendation.scss'

import SliderButtonNext from '@/components/SliderButton/SliderButtonNext'
import SliderButtonPrev from '@/components/SliderButton/SliderButtonPrev'
import SliderItem from './SliderItem'
import Button from '@/components/Button/Button'


import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import useSlider from '@/hooks/useSlider'

const SectionRecommendation = () => {
    const [itemMovies, setItemMovies] = useState([])
    const [firstSliderCard, setFirstSliderCard] = useState(0)
    const {nextCard, prevCard} = useSlider(firstSliderCard, itemMovies.length, setFirstSliderCard, 6)
    // --------- ВРЕМЕННО ИСПОЛЬЗУЮТСЯ ДАННЫЕ ИЗ ВСЕХ ФИЛЬМОВ ------------------

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/movies')
        .then(response => response.json())
        .then(json => setItemMovies(json.movies))
    }, [])

        return (
        <section className="section-recommend">
            <div className='section-recommend__header'>
            <h2 className="section-recommend__title">Все фильмы</h2>
            <NavLink to="/all-movies" end>
                <Button size="md" color="gradient-pink-blue" className="section-recommend__button-films">Ко всем фильмам</Button>
            </NavLink>
            </div>
                <div className="section-recommend__slider">
                    <SliderButtonPrev className={`section-recommend__button-prev ${firstSliderCard > 1 ? '' : 'hidden'}`} handleClick={prevCard}/>
                    <div className="section-recommend__offers">
                        {
                            itemMovies
                            .filter((item, id) => id >= firstSliderCard && id < firstSliderCard+6)
                            .map((item) => (
                                <SliderItem
                                    key = {item.id}
                                    rating = {item.rating}
                                    title = {item.title}
                                    description = {item.description}
                                />
                            ))
                        }
                    </div>
                <SliderButtonNext className="section-recommend__button-next" handleClick={nextCard}/>
            </div>
        </section>
    )
}

export default SectionRecommendation