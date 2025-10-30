import './SectionHero.scss'
import heroImage from '@/assets/image/hero.svg'

import Button from '../Button/Button'

import { useEffect, useMemo, useState } from 'react'
import { homeGreetings } from '@/data.js'

const SectionHero = () => {
    const [heroText, setHeroText] = useState('')
    const [indexChar, setIndexChar] = useState(0)
        const text = useMemo(() => {
            return homeGreetings[Math.floor(Math.random() * homeGreetings.length)]
        }, [])

        useEffect(() =>{
            if(indexChar < text.length) {
                const textInterval = setInterval(() => {
                    setHeroText((prev) => prev+text[indexChar])
                    setIndexChar((prev) => prev+1)
                }, 70);
                return () => clearTimeout(textInterval)
            }
            
    }, [indexChar, heroText])
        
    return (
        <section className="hero">
            <div className="hero__inner">
                <h1 className='hero__inner-title'>{`${heroText}`}</h1>
                <img className='hero__inner-image' src={heroImage} alt="Hero moodie image" />
                <Button size="lg" color="gradient-blue" className="hero__innger-button">Подобрать фильм</Button>
            </div>
        </section>
    )
}

export default SectionHero