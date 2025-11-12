import './dropDown.scss'

const DropDown = () => {

    const handleClick = (el) => {
        el.target.classList.toggle('active')
    }

    return (
        <ul className="dropdown__menu">
            <li className="dropdown__item" onClick={handleClick}>1</li>
            <li className="dropdown__item" onClick={handleClick}>2</li>
            <li className="dropdown__item" onClick={handleClick}>3</li>
            <li className="dropdown__item" onClick={handleClick}>4</li>
            <li className="dropdown__item" onClick={handleClick}>5</li>
            <li className="dropdown__item" onClick={handleClick}>6</li>
            <li className="dropdown__item" onClick={handleClick}>7</li>
        </ul>
    )
}

export default DropDown