import '../Pages/Hotels.css'
import img from '../img/filters.svg'
import map from '../img/Map.svg'
import img2 from '../img/Results Image.svg'
import video from '../img/video.svg'
import star from '../img/Vector.svg'
import img3 from '../img/Results Image (1).svg'
import img4 from '../img/Results Image (2).svg'
import img5 from '../img/Results Image (3).svg'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
export default function Hotels() {
    const {t} = useTranslation()

    const changeLanguage = (e) =>{
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <div className="hotel-head">
                <div className="container">
                    <div className="hotel-head-title">{t('Stays in Los Angeles')}</div>
                    <div className="hotel-head-buttons">
                        <button style={{ backgroundColor: 'white', color: '#1262AF' }}>{t('Recommended')}</button>
                        <button>{t('Price')}</button>
                        <button>{t('Rating')}</button>
                    </div>
                </div>
            </div>
            <section className="hotel-section">
                <div className="container">
                    <div className="top">
                        <div className="left-text">200+ {t('results')}</div>
                        <div className="right-text">
                            {t('Filters')}
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="results-parent">
                        <div className="results-card-parent">
                            <div className="result-card">
                                <div className="result-img">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="result-details">
                                    <div className="top">
                                        <div className="text-parent">
                                            <div className="text">{t('1 king bed standard')}</div>
                                            <div className="title">Holiday Inn Expre...</div>
                                            <div className="rating">
                                                <nav>
                                                    <img src={star} alt="" />
                                                    4.7
                                                </nav>
                                                (1,136 {t('reviews')})
                                            </div>
                                        </div>
                                        <img src={video} alt="" />
                                    </div>
                                    <div className="bottom">
                                        <div className="price"><span>$S 286</span>/{t('night')}</div>
                                        <button>{t('View Details')}</button>
                                    </div>
                                </div>
                            </div>
                            <div className="result-card">
                                <div className="result-img">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="result-details">
                                    <div className="top">
                                        <div className="text-parent">
                                            <div className="text">{t('Bed in Quad')}</div>
                                            <div className="title">Freehand Los Angeles</div>
                                            <div className="rating">
                                                <nav>
                                                    <img src={star} alt="" />
                                                    4.2
                                                </nav>
                                                (1,941 {t('reviews')})
                                            </div>
                                        </div>
                                        <img src={video} alt="" />
                                    </div>
                                    <div className="bottom">
                                        <div className="price"><span>$S 198</span>/{t('night')}</div>
                                        <button>{t('View Details')}</button>
                                    </div>
                                </div>
                            </div>
                            <div className="result-card">
                                <div className="result-img">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="result-details">
                                    <div className="top">
                                        <div className="text-parent">
                                            <div className="text">{t('1 King, City view')}</div>
                                            <div className="title">The Westin Bonavent...</div>
                                            <div className="rating">
                                                <nav>
                                                    <img src={star} alt="" />
                                                    4.1
                                                </nav>
                                                (1,002 {t('reviews')})
                                            </div>
                                        </div>
                                        <img src={video} alt="" />
                                    </div>
                                    <div className="bottom">
                                        <div className="price"><span>$S 289</span>/{t('night')}</div>
                                        <button>{t('View Details')}</button>
                                    </div>
                                </div>
                            </div>
                            <div className="result-card">
                                <div className="result-img">
                                    <img src={img5} alt="" />
                                </div>
                                <div className="result-details">
                                    <div className="top">
                                        <div className="text-parent">
                                            <div className="text">{t('Deluxe King')}</div>
                                            <div className="title">The Ritz-Carlton, L...</div>
                                            <div className="rating">
                                                <nav>
                                                    <img src={star} alt="" />
                                                    4.7
                                                </nav>
                                                (1,136 {t('reviews')})
                                            </div>
                                        </div>
                                        <img src={video} alt="" />
                                    </div>
                                    <div className="bottom">
                                        <div className="price"><span>$S 286</span>/{t('night')}</div>
                                        <button>{t('View Details')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={map} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}