import './SectionRecommendation.scss'

import SliderItem from './SliderItem'

const SectionRecommendation = () => {
    return (
        <section className="section-recommend">
            <div className="section-recommend__inner">
                <h2 className="section-recommend__title">Рекомендации дня</h2>
                <div className="section-recommend__slider">
                    <SliderItem />
                </div>
            </div>
        </section>
    )
}

export default SectionRecommendation