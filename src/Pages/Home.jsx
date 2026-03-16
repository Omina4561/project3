import './Home.css'
import img from '../img/Duration.svg'
import img2 from '../img/Hotel Icon.svg'
import img3 from '../img/Attractions Icon.svg'
import img4 from '../img/Eats Icon.svg'
import img5 from '../img/Commute icon.svg'
import img6 from '../img/Taxi Icon.svg'
import img7 from '../img/Movies icon.svg'
import arrow from '../img/arrow-right.svg'
import img8 from '../img/ParisCard.svg'
import img9 from '../img/GreeceCard.svg'
import img10 from '../img/NorwayCard.svg'
import img11 from '../img/TuscanyCard.svg'
import img12 from '../img/unsplash_5MV818tzxeo.svg'
import img13 from '../img/SwitzerlandImage.svg'
import img14 from '../img/BoracayImage.svg'
import img15 from '../img/PalawanImage.svg'
import img16 from '../img/Matterhorn Suites Image.svg'
import img17 from '../img/video.svg'
import star from '../img/Vector.svg'
import img18 from '../img/Discovery Shores Image.svg'
import img19 from '../img/Arctic Hut Image.svg'
import img20 from '../img/Lake Louise Image.svg'
export default function Home() {
    return (
        <>
            <section className='section-1'>
                <div className="container">
                    <div className="section-1-title">Let’s explore & travel the world</div>
                    <div className="section-1-text">Find the best destinations and the most popular stays!</div>
                    <form className="search-form">
                        <div className="search-form-top">
                            <div className="form-title">Search flights</div>
                            <div className="radio-inputs">
                                <div className="radio1">
                                    <input type="radio" />
                                    <p>Return</p>
                                </div>
                                <div className="radio1">
                                    <input type="radio" />
                                    <p>One-way</p>
                                </div>
                            </div>
                        </div>
                        <div className="search-form-bottom">
                            <div className="inp-box">
                                <label>Departure</label>
                                <input type="text" />
                            </div>
                            <div className="inp-box">
                                <label>Arrival</label>
                                <input type="text" />
                            </div>
                            <div className="inp-box">
                                <label>Date</label>
                                <input type="text" />
                            </div>
                            <button>Search flights</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="section-2">
                <div className="container">
                    <div className="section-2-title">Recent Searches</div>
                    <div className="section-2-parent1">
                        <div className="section-2-top">
                            <div className="section-2-top-box">
                                <nav>
                                    <p>SIN</p>
                                    <img src={img} alt="" />
                                    <p>LAX</p>
                                </nav>
                                <div className="section-2-box-date">
                                    <b>Depart On:</b> 7 Sep 2021
                                </div>
                            </div>
                            <div className="section-2-top-box">
                                <nav>
                                    <p>MY</p>
                                    <img src={img} alt="" />
                                    <p>DUB</p>
                                </nav>
                                <div className="section-2-box-date">
                                    <b>Depart On:</b> 9 Sep 2021
                                </div>
                            </div>
                        </div>
                        <div className="section-2-bottom">
                            <div className="section-2-bottom-title">
                                Prepare for your trip
                            </div>
                            <div className="trip-menus">
                                <div className="trip-menus-item">
                                    <img src={img2} alt="" />
                                    <p>Hotel</p>
                                </div>
                                <div className="trip-menus-item">
                                    <img src={img3} alt="" />
                                    <p>Attractions</p>
                                </div>
                                <div className="trip-menus-item">
                                    <img src={img4} alt="" />
                                    <p>Eats</p>
                                </div>
                                <div className="trip-menus-item">
                                    <img src={img5} alt="" />
                                    <p>Commute</p>
                                </div>
                                <div className="trip-menus-item">
                                    <img src={img6} alt="" />
                                    <p>Taxi</p>
                                </div>
                                <div className="trip-menus-item">
                                    <img src={img7} alt="" />
                                    <p>Movies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-2-parent2">
                        <div className="section-2-parent2-title2">Plan your next trip</div>
                        <div className="section-2-parent2-top">
                            <div className="section-2-parent2-title">Most Popular Destinations</div>
                            <nav className='view-link'><a href="">View all destinations </a> <img src={arrow} alt="" /></nav>
                        </div>
                        <div className="section-2-card-parent">
                            <img src={img8} alt="" />
                            <img src={img9} alt="" />
                            <img src={img10} alt="" />
                            <img src={img11} alt="" />
                        </div>
                    </div>
                    <div className="section-2-parent2">
                        <div className="section-2-parent2-top">
                            <div className="section-2-parent2-title">Recommended Holidays </div>
                            <nav className='view-link'><a href="">View all holidays </a> <img src={arrow} alt="" /></nav>
                        </div>
                        <div className="section-2-card-parent">
                            <div className="section-2-card1">
                                <img src={img12} alt="" />
                                <div className="section-2-card-text">
                                    <div className="left">
                                        <div className="card-title">Bali</div>
                                        <div className="card-text">4D3N</div>
                                    </div>
                                    <div className="right">$899</div>
                                </div>
                            </div>
                            <div className="section-2-card1">
                                <img src={img13} alt="" />
                                <div className="section-2-card-text">
                                    <div className="left">
                                        <div className="card-title">Swiss</div>
                                        <div className="card-text">6D5N</div>
                                    </div>
                                    <div className="right">$900</div>
                                </div>
                            </div>
                            <div className="section-2-card1">
                                <img src={img14} alt="" />
                                <div className="section-2-card-text">
                                    <div className="left">
                                        <div className="card-title">Boracay</div>
                                        <div className="card-text">5D4N</div>
                                    </div>
                                    <div className="right">$699</div>
                                </div>
                            </div>
                            <div className="section-2-card1">
                                <img src={img15} alt="" />
                                <div className="section-2-card-text">
                                    <div className="left">
                                        <div className="card-title">Palawan</div>
                                        <div className="card-text">4D3N</div>
                                    </div>
                                    <div className="right">$789</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-2-parent2">
                        <div className="section-2-parent2-top">
                            <div className="section-2-parent2-title">Popular Stays </div>
                            <nav className='view-link'><a href="">View all stays </a> <img src={arrow} alt="" /></nav>
                        </div>
                        <div className="section-2-card-parent">
                            <div className="section-2-card2">
                                <img src={img16} alt="" />
                                <div className="stay-details">
                                    <nav>
                                        <div className="card2-text">Entire bungalow</div>
                                        <div className="card2-title">Matterhorn Suites</div>
                                        <div className="card2-price">$575/night</div>
                                    </nav>
                                    <img src={img17} alt="" />
                                </div>
                                <div className="card2-rating">
                                    <nav><img src={star} alt="" /> 4.9</nav>
                                    <p>(60 reviews)</p>
                                </div>
                                <button>More details</button>
                            </div>
                            <div className="section-2-card2">
                                <img src={img18} alt="" />
                                <div className="stay-details">
                                    <nav>
                                        <div className="card2-text">2-Story beachfront suite</div>
                                        <div className="card2-title">Discovery Shores</div>
                                        <div className="card2-price">$360/night</div>
                                    </nav>
                                    <img src={img17} alt="" />
                                </div>
                                <div className="card2-rating">
                                    <nav><img src={star} alt="" /> 4.8</nav>
                                    <p>(116 reviews)</p>
                                </div>
                                <button>More details</button>
                            </div>
                            <div className="section-2-card2">
                                <img src={img19} alt="" />
                                <div className="stay-details">
                                    <nav>
                                        <div className="card2-text">Single deluxe hut</div>
                                        <div className="card2-title">Arctic Hut </div>
                                        <div className="card2-price">$420/night</div>
                                    </nav>
                                    <img src={img17} alt="" />
                                </div>
                                <div className="card2-rating">
                                    <nav><img src={star} alt="" /> 4.7</nav>
                                    <p>(78 reviews)</p>
                                </div>
                                <button>More details</button>
                            </div>
                            <div className="section-2-card2">
                                <img src={img20} alt="" />
                                <div className="stay-details">
                                    <nav>
                                        <div className="card2-text">Deluxe King Room</div>
                                        <div className="card2-title">Lake Louise Inn</div>
                                        <div className="card2-price">$244/night</div>
                                    </nav>
                                    <img src={img17} alt="" />
                                </div>
                                <div className="card2-rating">
                                    <nav><img src={star} alt="" /> 4.6</nav>
                                    <p>(63 reviews)</p>
                                </div>
                                <button>More details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}