import './SliderButton.scss'

const SliderButtonPrev = (props) => {
    const {
        className,
        handleClick,
    } = props
    
    return (
        <button className={`button-prev ${className}`} onClick={handleClick}></button>
    )
}

export default SliderButtonPrev