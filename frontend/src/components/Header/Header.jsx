import './Header.scss'
import Button from '../Button/Button'

const Header = () => {
    return (
        <header className='header'>
            <a className='header__title' href="/">Moodi</a>
            <nav className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-item">
                        <a href='/'>Рекомендации дня</a>
                    </li>
                    <li className="header__menu-item">
                        <a href='/'>Популярное сейчас</a>
                    </li>
                    <li className="header__menu-item">
                        <a href='/'>Подборки</a>
                    </li>
                </ul>
            </nav>
            <div className="header__menu-actions">
                <Button size="sm" color="gradient-orange" className="menu_actions-button-donate">Поддержать</Button>
                <Button size="sm" color="blue" className="menu_actions-button-enter">Войти</Button>
            </div>
        </header>
    )
}

export default Header