import './CategoriesMovies.scss'

import Button from "../../Button/Button"
import CategoriesDropDownButton from './CategoriesDropDownButton'

const CategoriesMovies = () => { 

    const handleClickButton = (el) => el.target.classList.toggle('active')

    return (
        <section className="categories">
            <ul className="categories__list">
                <CategoriesDropDownButton buttonName="Жанры"/>
                <CategoriesDropDownButton buttonName="Годы"/>
                <CategoriesDropDownButton buttonName="Страны"/>
                <Button className="categories__button" color="pink" onClick={handleClickButton}>Новое</Button>
                <Button className="categories__button" color="pink" onClick={handleClickButton}>Лучшее</Button>
                <button className="categories__clear">Сбросить</button>
            </ul>
        </section>
    )
}

export default CategoriesMovies