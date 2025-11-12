import './SectionRecommendation.scss'

import imageTest from '../../../assets/image/test-image.png'
import Button from "../../Button/Button"

const SliderItem = (props) => {
    const {
        rating,
        image,
        title,
        description
    } = props

    const onHoverPoster = (e) => e.currentTarget.classList.add('hover')

    const onLeavePoster = (e) => e.currentTarget.classList.remove('hover')

    return (
        <div className="recommend-item">
            <div className={`recommend-item__poster`} onMouseEnter={onHoverPoster} onMouseLeave={onLeavePoster}>
                <button className="recommend-item__button-favorite"></button>
                <div className="recommend-item__rating">{rating}</div>
                <img 
                className='recommend-item__image'
                src={imageTest} 
                alt="film poster" 
                />
                <Button size="md" color="gradient-pink-blue" className="recommend-item__button-detail">Подробнее</Button>
            </div>
            <div className="recommend-item__info">
                <div className="recommend-item__subtitle">{title}</div>
                <div className="recommend-item__desc">{description}</div>
            </div>
        </div>
    )
}

export default SliderItem