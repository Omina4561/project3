import { useTranslation } from 'react-i18next'
import './Subscribe.css'
import i18n from '../i18n/i18n'
export default function Subscribe() {
    const {t} = useTranslation()

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <section className="subcribe-section">
                <div className="subscribe-form">
                    <div className="sub-titles">
                        <div className="sub-title">{t('subscribe to our newsletter')}</div>
                        <div className="sub-title-2">{t('Get weekly updates')}</div>
                    </div>
                    <form>
                        <div className="sub-form-title">
                            {t('Fill in your details to join the party!')}
                        </div>
                        <div className="sub-form-inputs">
                            <input type="text" placeholder={t('Your name')} />
                            <input type="email" placeholder={t('Email address')} />
                        </div>
                        <button>{t('submit')}</button>
                    </form>
                </div>
            </section>
        </>
    )
}