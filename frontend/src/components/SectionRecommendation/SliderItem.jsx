import './SectionRecommendation.scss'

import imageTest from '../../../src/assets/image/test-image.png'
import Button from "../Button/Button"

const SliderItem = () => {
    return (
        <div className="section-recommend__item">
            <div className="section-recommend__rating"></div>
            <div className="section-recommend__poster">
                <img 
                className='section-recommend__poster-image'
                src={imageTest} 
                alt="film poster" 
                />
            </div>
            <div className="section-recommend__info">
                <div className="section-recommend__details">
                    <div className="section-recommend__details-title">Груз 200</div>
                    <div className="section-recommend__details-desc">Комедия, 2007</div>
                </div>
                <div className="section-recommend__interaction">
                    <Button size="md" color="gradient-blue" className="button section-recommend__interaction-button">Подробнее</Button>
                </div>
            </div>
        </div>
    )
}

export default SliderItem