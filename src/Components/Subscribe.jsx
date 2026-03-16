import './Subscribe.css'
export default function Subscribe() {
    return (
        <>
            <section className="subcribe-section">
                <div className="subscribe-form">
                    <div className="sub-titles">
                        <div className="sub-title">subscribe to our newsletter</div>
                        <div className="sub-title-2">Get weekly updates</div>
                    </div>
                    <form>
                        <div className="sub-form-title">
                            Fill in your details to join the party!
                        </div>
                        <div className="sub-form-inputs">
                            <input type="text" placeholder='Your name' />
                            <input type="email" placeholder='Email address' />
                        </div>
                        <button>submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}