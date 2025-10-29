import './Header.scss'
import Button from '../Button/Button'

const Header = () => {
    return (
        <header className='header'>
            <a className='header__title' href="/">Moodi</a>
            <nav className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu_item"><a href='/'>Рекомендации дня</a></li>
                    <li className="header__menu_item"><a href='/'>Популярное сейчас</a></li>
                    <li className="header__menu_item"><a href='/'>Подборки</a></li>
                </ul>
            </nav>
            <div className="header__menu-actions">
                <Button>Поддержать</Button>
                <Button>Войти</Button>
            </div>
        </header>
    )
}

export default Header