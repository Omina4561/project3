import './Header.css'
import { NavLink } from 'react-router-dom'
import img from '../img/Fickleflight Logo.svg'
import img2 from '../img/notification bell.svg'
import img3 from '../img/profile picture.svg'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
export default function Header() {
    const {t} = useTranslation()

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="head-parent">
                        <img src={img} alt="" />
                        <div className="head-right">
                            <select onChange={changeLanguage} value={i18n.language}>
                                <option value="en">English</option>
                                <option value="ru">Russian</option>
                                <option value="uz">Uzbek</option>
                            </select>
                            <nav className="links">
                                <NavLink to='/' >{t('Explore')}</NavLink>
                                <NavLink to='/search'>{t('Search')}</NavLink>
                                <NavLink to='/hotels'>{t('Hotels')}</NavLink>
                                <NavLink>{t('Offers')}</NavLink>
                            </nav>
                            <div className="right-images">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}