import './SectionRecommendation.scss'

import imageTest from '../../../src/assets/image/test-image.png'
import Button from "../Button/Button"

const SliderItem = (props) => {
    const {
        rating,
        image,
        title,
        description
    } = props

    return (
        <div className="section-recommend__item">
            <div className="section-recommend__item-poster">
                <div className="section-recommend__item-rating">{rating}</div>
                <img 
                className='section-recommend__item-image'
                src={imageTest} 
                alt="film poster" 
                />
            </div>
            <div className="section-recommend__item-info">
                <div className="section-recommend__item-title">{title}</div>
                <div className="section-recommend__item-desc">{description}</div>
            </div>
        </div>
    )
}

export default SliderItem