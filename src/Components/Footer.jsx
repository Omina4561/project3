import './Footer.css'
import img from '../img/Symbols.svg'
import img2 from '../img/entypo-social_facebook-with-circle.svg'
import img3 from '../img/entypo-social_instagram-with-circle.svg'
import img4 from '../img/entypo-social_twitter-with-circle.svg'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="foot">
                        <div className="foot-left">
                            <img src={img} alt="" className='foot-logo' />
                            <div className="foot-text">Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</div>
                            <div className="social-icons">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className="foot-line"></div>
                        <div className="foot-right">
                            <div className="foot-links">
                                <div className="foot-link-title">Company</div>
                                <a href="">About Us</a>
                                <a href="">News</a>
                                <a href="">Careers</a>
                                <a href="">How we work</a>
                            </div>
                            <div className="foot-links">
                                <div className="foot-link-title">Support</div>
                                <a href="">Account</a>
                                <a href="">Support Center</a>
                                <a href="">FAQ</a>
                                <a href="">Accessibility</a>
                            </div>
                            <div className="foot-links">
                                <div className="foot-link-title">More</div>
                                <a href="">Covid Advisory</a>
                                <a href="">Airline Fees</a>
                                <a href="">Tips</a>
                                <a href="">Quarantine Rules</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}