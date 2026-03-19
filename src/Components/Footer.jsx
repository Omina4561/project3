import './Footer.css'
import img from '../img/Symbols.svg'
import img2 from '../img/entypo-social_facebook-with-circle.svg'
import img3 from '../img/entypo-social_instagram-with-circle.svg'
import img4 from '../img/entypo-social_twitter-with-circle.svg'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
export default function Footer() {
    const {t} = useTranslation()

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <footer>
                <div className="container">
                    <div className="foot">
                        <div className="foot-left">
                            <img src={img} alt="" className='foot-logo' />
                            <div className="foot-text">{t('Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop')}.</div>
                            <div className="social-icons">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className="foot-line"></div>
                        <div className="foot-right">
                            <div className="foot-links">
                                <div className="foot-link-title">{t('Company')}</div>
                                <a href="">{t('About Us')}</a>
                                <a href="">{t('News')}</a>
                                <a href="">{t('Careers')}</a>
                                <a href="">{t('How we work')}</a>
                            </div>
                            <div className="foot-links">
                                <div className="foot-link-title">{t('Support')}</div>
                                <a href="">{t('Account')}</a>
                                <a href="">{t('Support Center')}</a>
                                <a href="">FAQ</a>
                                <a href="">{t('Accessibility')}</a>
                            </div>
                            <div className="foot-links">
                                <div className="foot-link-title">{t('More')}</div>
                                <a href="">{t('Covid Advisory')}</a>
                                <a href="">{t('Airline Fees')}</a>
                                <a href="">{t('Tips')}</a>
                                <a href="">{t('Quarantine Rules')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}