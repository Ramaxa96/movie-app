import './SliderButton.scss'

const SliderButtonNext = (props) => {
    const {
        className, 
        handleClick,
    } = props
    
    return (
        <button className={`button-next ${className}`} onClick={handleClick}></button>
    )
}

export default SliderButtonNext