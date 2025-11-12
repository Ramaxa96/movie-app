import './CategoriesMovies.scss'

import DropDown from './DropDown'
import Button from "../../Button/Button"

import { useState } from 'react'

const CategoriesDropDownButton = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const {
        buttonName,
        dropDownItems
    } = props

    const handleClickDropDownButton = (el) => {
        setIsOpen(!isOpen)
        el.target.classList.toggle('active')
    }

    return (
        <div className={`categories__dropdown ${isOpen ? 'open' : ''}`}>
        <Button className="dropdown__button" color="pink" onClick={handleClickDropDownButton}>{buttonName}</Button>
        {isOpen && <DropDown items={dropDownItems}/>}  
        </div>
    )
}

export default CategoriesDropDownButton