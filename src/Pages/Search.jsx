import './Search.css'
import img from '../img/Group 373.svg'
import img2 from '../img/FlightIcon.svg'
import img3 from '../img/SIA.svg'
import img4 from '../img/japan.svg'
import img5 from '../img/ANA.svg'
import img6 from '../img/american-airlines.svg'
import img7 from '../img/Flight Icon.svg'
import img8 from '../img/Class icon.svg'
import img9 from '../img/Calender.svg'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
export default function Search() {
    const {t} = useTranslation()
    
    const changeLanguage = (e) =>{
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <div className="search-section-1">
                <div className="container">
                    <div className="search-s1-title">{t('Where are you off too?')}</div>
                    <form>
                        <div className="search-form-bottom">
                            <div className="inp-box">
                                <label>{t('Departure')}</label>
                                <input type="text" />
                            </div>
                            <div className="inp-box">
                                <label>{t('Arrival')}</label>
                                <input type="text" />
                            </div>
                            <div className="inp-box">
                                <label>{t('Date')}</label>
                                <input type="text" />
                            </div>
                            <button>{t('Search flights')}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="search-section-2">
                <div className="search-s2-left">
                    <p>{t('10 out of 177 Results')}</p>
                    <div className="search-s2-left-box">
                        <div className="title">{t('Stops')}</div>
                        <nav>
                            <div className="text">
                                <input type="checkbox" />
                                1 {t('Stop')}
                            </div>
                            <div className="text">
                                <input type="checkbox" />
                                2 {t('Stop')}
                            </div>
                        </nav>
                    </div>
                    <div className="search-s2-left-box">
                        <div className="title">{t('Booking Options')}</div>
                        <nav>
                            <div className="text">
                                <input type="checkbox" />
                                {t('Book on Fickleflight')}
                            </div>
                            <div className="text">
                                <input type="checkbox" />
                                {t('Official Airline Websites')}
                            </div>
                        </nav>
                    </div>
                    <div className="search-s2-left-box">
                        <div className="title">{t('Flight Experience')}</div>
                        <nav>
                            <div className="text">
                                <input type="checkbox" />
                                {t('No overnight flights')}
                            </div>
                            <div className="text">
                                <input type="checkbox" />
                                {t('No long stop-overs')}
                            </div>
                        </nav>
                    </div>
                    <div className="line"></div>
                    <div className="search-s2-left-box">
                        <div className="title">{t('Airlines')}</div>
                        <nav>
                            <div className="text">
                                <input type="checkbox" />
                                Singapore Airlines
                            </div>
                            <div className="text">
                                <input type="checkbox" />
                                Qatar Airways
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="search-s2-center">
                    <p>{t('10 out of 177 Results')}</p>
                    <div className="box">
                        <div className="box-title">
                            <img src={img} alt="" />
                            Turkish Airlines
                        </div>
                        <div className="box-details">
                            <div className="box-details-top">
                                <div className="time">11:35 PM</div>
                                <img src={img2} alt="" />
                                <div className="time">4:45 PM</div>
                            </div>
                            <div className="box-details-bottom">
                                <div className="text1">SIN</div>
                                <div className="text2">33H 10M, 1-{t('stop')}</div>
                                <div className="text1">LAX</div>
                            </div>
                        </div>
                        <div className="box-price">S$ 723</div>
                    </div>
                    <div className="box">
                        <div className="box-title">
                            <img src={img3} alt="" />
                            Singapore Airlines
                        </div>
                        <div className="box-details">
                            <div className="box-details-top">
                                <div className="time">8:45 PM </div>
                                <img src={img2} alt="" />
                                <div className="time">7:55 PM</div>
                            </div>
                            <div className="box-details-bottom">
                                <div className="text1">SIN</div>
                                <div className="text2">15H 10M, 1-{t('stop')}</div>
                                <div className="text1">LAX</div>
                            </div>
                        </div>
                        <div className="box-price">S$ 900</div>
                    </div>
                    <div className="box">
                        <div className="box-title">
                            <img src={img4} alt="" />
                            Japan Airlines
                        </div>
                        <div className="box-details">
                            <div className="box-details-top">
                                <div className="time">8:20 PM </div>
                                <img src={img2} alt="" />
                                <div className="time">9:50 PM</div>
                            </div>
                            <div className="box-details-bottom">
                                <div className="text1">SIN</div>
                                <div className="text2">17H 30M, 1-{t('stop')}</div>
                                <div className="text1">LAX</div>
                            </div>
                        </div>
                        <div className="box-price">S$ 859</div>
                    </div>
                    <div className="box">
                        <div className="box-title">
                            <img src={img5} alt="" />
                            ANA
                        </div>
                        <div className="box-details">
                            <div className="box-details-top">
                                <div className="time">6:35 PM </div>
                                <img src={img2} alt="" />
                                <div className="time">9:50 PM</div>
                            </div>
                            <div className="box-details-bottom">
                                <div className="text1">SIN</div>
                                <div className="text2">19H 15M, 1-{t('stop')}</div>
                                <div className="text1">LAX</div>
                            </div>
                        </div>
                        <div className="box-price">S$ 936</div>
                    </div>
                    <div className="box">
                        <div className="box-title">
                            <img src={img6} alt="" />
                            American Airlines
                        </div>
                        <div className="box-details">
                            <div className="box-details-top">
                                <div className="time">8:20 PM </div>
                                <img src={img2} alt="" />
                                <div className="time">9:50 PM</div>
                            </div>
                            <div className="box-details-bottom">
                                <div className="text1">SIN</div>
                                <div className="text2">17H 30M, 1-{t('stop')}</div>
                                <div className="text1">LAX</div>
                            </div>
                        </div>
                        <div className="box-price">S$ 936</div>
                    </div>
                    <div className="box">
                        <div className="box-title">
                            <img src={img} alt="" />
                            Turkish Airlines
                        </div>
                        <div className="box-details">
                            <div className="box-details-top">
                                <div className="time">11:35 PM</div>
                                <img src={img2} alt="" />
                                <div className="time">4:45 PM</div>
                            </div>
                            <div className="box-details-bottom">
                                <div className="text1">SIN</div>
                                <div className="text2">33H 10M, 1-{t('stop')}</div>
                                <div className="text1">LAX</div>
                            </div>
                        </div>
                        <div className="box-price">S$ 673</div>
                    </div>
                    <div className="box">
                        <div className="box-title">
                            <img src={img4} alt="" />
                            Japan Airlines
                        </div>
                        <div className="box-details">
                            <div className="box-details-top">
                                <div className="time">8:20 PM </div>
                                <img src={img2} alt="" />
                                <div className="time">9:50 PM</div>
                            </div>
                            <div className="box-details-bottom">
                                <div className="text1">SIN</div>
                                <div className="text2">17H 30M, 1-{t('stop')}</div>
                                <div className="text1">LAX</div>
                            </div>
                        </div>
                        <div className="box-price">S$ 859</div>
                    </div>
                    <button>{t('Show more results')}</button>
                </div>
                <div className="search-s2-right">
                    <p>{t('Recently booked')}</p>
                    <div className="booking-cards">
                        <div className="booking-card">
                            <div className="airplane-price">
                                <nav>
                                    <img src={img3} alt="" />
                                    Singapore Airlines
                                </nav>
                                $1128
                            </div>
                            <div className="locations">
                                <div className="left">
                                    <div className="locations-depCode">SIN</div>
                                    <div className="locations-depName">Singapore</div>
                                </div>
                                <img src={img7} alt="" />
                                <div className="right">
                                    <div className="locations-depCode">LAX</div>
                                    <div className="locations-depName">Los Angeles</div>
                                </div>
                            </div>
                            <div className="details">
                                <nav>
                                    <img src={img8} alt="" />
                                    Economy
                                </nav>
                                <nav>
                                    <img src={img9} alt="" />
                                    2 Adults
                                </nav>
                            </div>
                            <div className="provider">
                                <div className="text1">Booked on <span> Expedia</span></div>
                                <div className="text2">1s ago!</div>
                            </div>
                        </div>
                        <div className="booking-card">
                            <div className="airplane-price">
                                <nav>
                                    <img src={img6} alt="" />
                                    American Airlines
                                </nav>
                                $1024
                            </div>
                            <div className="locations">
                                <div className="left">
                                    <div className="locations-depCode">SFO</div>
                                    <div className="locations-depName">San Francisco</div>
                                </div>
                                <img src={img7} alt="" />
                                <div className="right">
                                    <div className="locations-depCode">SIN</div>
                                    <div className="locations-depName">Singapore</div>
                                </div>
                            </div>
                            <div className="details">
                                <nav>
                                    <img src={img8} alt="" />
                                    First Class
                                </nav>
                                <nav>
                                    <img src={img9} alt="" />
                                    1 Adults
                                </nav>
                            </div>
                            <div className="provider">
                                <div className="text1">Booked on <span>Kayak</span></div>
                                <div className="text2">2s ago!</div>
                            </div>
                        </div>
                        <div className="booking-card">
                            <div className="airplane-price">
                                <nav>
                                    <img src={img4} alt="" />
                                    Japan Airlines
                                </nav>
                                $2996
                            </div>
                            <div className="locations">
                                <div className="left">
                                    <div className="locations-depCode">PHX</div>
                                    <div className="locations-depName">Phoenix</div>
                                </div>
                                <img src={img7} alt="" />
                                <div className="right">
                                    <div className="locations-depCode">DXB</div>
                                    <div className="locations-depName">Dubai</div>
                                </div>
                            </div>
                            <div className="details">
                                <nav>
                                    <img src={img8} alt="" />
                                    Economy
                                </nav>
                                <nav>
                                    <img src={img9} alt="" />
                                    3 Adults
                                </nav>
                            </div>
                            <div className="provider">
                                <div className="text1">Booked on <span>Skyscanner</span></div>
                                <div className="text2">3s ago!</div>
                            </div>
                        </div>
                        <button>{t('Show more')}</button>
                    </div>
                </div>
            </div>
        </>
    )
}